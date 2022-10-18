from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional

class FacetsSortKeysEnum(str, Enum):
    SCORE_DESC = "score,,desc"
    SPATIAL_AREA_ASC = "spatial_area,,asc"
    SPATIAL_AREA_DESC = "spatial_area,,desc"
    TEMPORAL_DURATION_ASC = "temporal_duration,,asc"
    TEMPORAL_DURATION_DESC = "temporal_duration,,desc"
    UPDATED_DESC = "updated,,desc"

class FacetsSourceEnum(str, Enum):
    NSIDC = "NSIDC"
    ADE = "ADE"


@dataclass
class FacetsQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    facet_filters: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'facetFilters', 'style': 'form', 'explode': True }})
    search_terms: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchTerms', 'style': 'form', 'explode': True }})
    sort_keys: Optional[FacetsSortKeysEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortKeys', 'style': 'form', 'explode': True }})
    source: Optional[FacetsSourceEnum] = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    spatial: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'spatial', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    

@dataclass
class FacetsRequest:
    query_params: FacetsQueryParams = field(default=None)
    

@dataclass
class FacetsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

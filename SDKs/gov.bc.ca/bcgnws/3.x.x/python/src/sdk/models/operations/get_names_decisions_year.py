from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetNamesDecisionsYearOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    KML = "kml"
    CSV = "csv"

class GetNamesDecisionsYearOutputStyleEnum(str, Enum):
    SUMMARY = "summary"
    DETAIL = "detail"

class GetNamesDecisionsYearSortByEnum(str, Enum):
    NAME = "name"
    FEATURE_TYPE = "featureType"
    DECISION_DATE = "decisionDate"


@dataclass
class GetNamesDecisionsYearQueryParams:
    output_format: GetNamesDecisionsYearOutputFormatEnum = field(metadata={'query_param': { 'field_name': 'outputFormat', 'style': 'form', 'explode': True }})
    year: int = field(metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    embed: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    feature_category: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'featureCategory', 'style': 'form', 'explode': True }})
    feature_class: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'featureClass', 'style': 'form', 'explode': True }})
    feature_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'featureType', 'style': 'form', 'explode': True }})
    items_per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'itemsPerPage', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    output_style: Optional[GetNamesDecisionsYearOutputStyleEnum] = field(default=None, metadata={'query_param': { 'field_name': 'outputStyle', 'style': 'form', 'explode': True }})
    sort_by: Optional[GetNamesDecisionsYearSortByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNamesDecisionsYearRequest:
    query_params: GetNamesDecisionsYearQueryParams = field()
    

@dataclass
class GetNamesDecisionsYearResponse:
    content_type: str = field()
    status_code: int = field()
    

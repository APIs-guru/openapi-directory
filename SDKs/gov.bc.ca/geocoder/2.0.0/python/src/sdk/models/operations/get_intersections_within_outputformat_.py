from dataclasses import dataclass, field
from typing import Enum,Optional

class GetIntersectionsWithinOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    GEOJSON = "geojson"
    XHTML = "xhtml"
    KML = "kml"
    GML = "gml"
    CSV = "csv"
    SHPZ = "shpz"


@dataclass
class GetIntersectionsWithinOutputFormatPathParams:
    output_format: GetIntersectionsWithinOutputFormatOutputFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIntersectionsWithinOutputFormatQueryParams:
    bbox: str = field(default=None, metadata={'query_param': { 'field_name': 'bbox', 'style': 'form', 'explode': True }})
    max_degree: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxDegree', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    min_degree: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minDegree', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    

@dataclass
class GetIntersectionsWithinOutputFormatRequest:
    path_params: GetIntersectionsWithinOutputFormatPathParams = field(default=None)
    query_params: GetIntersectionsWithinOutputFormatQueryParams = field(default=None)
    

@dataclass
class GetIntersectionsWithinOutputFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

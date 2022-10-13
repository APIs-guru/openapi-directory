from dataclasses import dataclass, field
from typing import Enum,Optional

class GetIntersectionsNearOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    GEOJSON = "geojson"
    XHTML = "xhtml"
    KML = "kml"
    GML = "gml"
    CSV = "csv"
    SHPZ = "shpz"


@dataclass
class GetIntersectionsNearOutputFormatPathParams:
    output_format: GetIntersectionsNearOutputFormatOutputFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIntersectionsNearOutputFormatQueryParams:
    max_degree: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxDegree', 'style': 'form', 'explode': True }})
    max_distance: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxDistance', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    min_degree: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minDegree', 'style': 'form', 'explode': True }})
    output_srs: int = field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    point: str = field(default=None, metadata={'query_param': { 'field_name': 'point', 'style': 'form', 'explode': True }})
    

@dataclass
class GetIntersectionsNearOutputFormatRequest:
    path_params: GetIntersectionsNearOutputFormatPathParams = field(default=None)
    query_params: GetIntersectionsNearOutputFormatQueryParams = field(default=None)
    

@dataclass
class GetIntersectionsNearOutputFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

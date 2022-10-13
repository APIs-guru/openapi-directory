from dataclasses import dataclass, field
from typing import Enum,Optional

class GetIntersectionsNearestOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    GEOJSON = "geojson"
    XHTML = "xhtml"
    KML = "kml"
    GML = "gml"
    CSV = "csv"
    SHPZ = "shpz"


@dataclass
class GetIntersectionsNearestOutputFormatPathParams:
    output_format: GetIntersectionsNearestOutputFormatOutputFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIntersectionsNearestOutputFormatQueryParams:
    max_degree: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxDegree', 'style': 'form', 'explode': True }})
    max_distance: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxDistance', 'style': 'form', 'explode': True }})
    min_degree: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minDegree', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    point: str = field(default=None, metadata={'query_param': { 'field_name': 'point', 'style': 'form', 'explode': True }})
    

@dataclass
class GetIntersectionsNearestOutputFormatRequest:
    path_params: GetIntersectionsNearestOutputFormatPathParams = field(default=None)
    query_params: GetIntersectionsNearestOutputFormatQueryParams = field(default=None)
    

@dataclass
class GetIntersectionsNearestOutputFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

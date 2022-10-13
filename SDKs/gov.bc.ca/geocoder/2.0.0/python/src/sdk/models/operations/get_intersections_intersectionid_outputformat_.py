from dataclasses import dataclass, field
from typing import Enum,Optional

class GetIntersectionsIntersectionIDOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    GEOJSON = "geojson"
    XHTML = "xhtml"
    KML = "kml"
    GML = "gml"
    CSV = "csv"
    SHPZ = "shpz"


@dataclass
class GetIntersectionsIntersectionIDOutputFormatPathParams:
    intersection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'intersectionID', 'style': 'simple', 'explode': False }})
    output_format: GetIntersectionsIntersectionIDOutputFormatOutputFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIntersectionsIntersectionIDOutputFormatQueryParams:
    output_srs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    

@dataclass
class GetIntersectionsIntersectionIDOutputFormatRequest:
    path_params: GetIntersectionsIntersectionIDOutputFormatPathParams = field(default=None)
    query_params: GetIntersectionsIntersectionIDOutputFormatQueryParams = field(default=None)
    

@dataclass
class GetIntersectionsIntersectionIDOutputFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

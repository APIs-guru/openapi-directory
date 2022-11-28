from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

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
    intersection_id: str = field(metadata={'path_param': { 'field_name': 'intersectionID', 'style': 'simple', 'explode': False }})
    output_format: GetIntersectionsIntersectionIDOutputFormatOutputFormatEnum = field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIntersectionsIntersectionIDOutputFormatQueryParams:
    output_srs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    

@dataclass
class GetIntersectionsIntersectionIDOutputFormatRequest:
    path_params: GetIntersectionsIntersectionIDOutputFormatPathParams = field()
    query_params: GetIntersectionsIntersectionIDOutputFormatQueryParams = field()
    

@dataclass
class GetIntersectionsIntersectionIDOutputFormatResponse:
    content_type: str = field()
    status_code: int = field()
    

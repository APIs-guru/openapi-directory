from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

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
    output_format: GetIntersectionsNearestOutputFormatOutputFormatEnum = field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIntersectionsNearestOutputFormatQueryParams:
    point: str = field(metadata={'query_param': { 'field_name': 'point', 'style': 'form', 'explode': True }})
    max_degree: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxDegree', 'style': 'form', 'explode': True }})
    max_distance: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxDistance', 'style': 'form', 'explode': True }})
    min_degree: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minDegree', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    

@dataclass
class GetIntersectionsNearestOutputFormatRequest:
    path_params: GetIntersectionsNearestOutputFormatPathParams = field()
    query_params: GetIntersectionsNearestOutputFormatQueryParams = field()
    

@dataclass
class GetIntersectionsNearestOutputFormatResponse:
    content_type: str = field()
    status_code: int = field()
    

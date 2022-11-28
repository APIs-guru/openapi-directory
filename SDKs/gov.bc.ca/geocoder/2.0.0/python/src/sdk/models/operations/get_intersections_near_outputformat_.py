from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

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
    output_format: GetIntersectionsNearOutputFormatOutputFormatEnum = field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIntersectionsNearOutputFormatQueryParams:
    output_srs: int = field(metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    point: str = field(metadata={'query_param': { 'field_name': 'point', 'style': 'form', 'explode': True }})
    max_degree: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxDegree', 'style': 'form', 'explode': True }})
    max_distance: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxDistance', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    min_degree: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minDegree', 'style': 'form', 'explode': True }})
    

@dataclass
class GetIntersectionsNearOutputFormatRequest:
    path_params: GetIntersectionsNearOutputFormatPathParams = field()
    query_params: GetIntersectionsNearOutputFormatQueryParams = field()
    

@dataclass
class GetIntersectionsNearOutputFormatResponse:
    content_type: str = field()
    status_code: int = field()
    

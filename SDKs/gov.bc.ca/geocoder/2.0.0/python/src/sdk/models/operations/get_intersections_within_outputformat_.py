from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

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
    output_format: GetIntersectionsWithinOutputFormatOutputFormatEnum = field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIntersectionsWithinOutputFormatQueryParams:
    bbox: str = field(metadata={'query_param': { 'field_name': 'bbox', 'style': 'form', 'explode': True }})
    max_degree: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxDegree', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    min_degree: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minDegree', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    

@dataclass
class GetIntersectionsWithinOutputFormatRequest:
    path_params: GetIntersectionsWithinOutputFormatPathParams = field()
    query_params: GetIntersectionsWithinOutputFormatQueryParams = field()
    

@dataclass
class GetIntersectionsWithinOutputFormatResponse:
    content_type: str = field()
    status_code: int = field()
    

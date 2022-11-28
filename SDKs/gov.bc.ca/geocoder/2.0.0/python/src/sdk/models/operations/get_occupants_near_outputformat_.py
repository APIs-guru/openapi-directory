from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetOccupantsNearOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    GEOJSON = "geojson"
    XHTML = "xhtml"
    KML = "kml"
    GML = "gml"
    CSV = "csv"
    SHPZ = "shpz"


@dataclass
class GetOccupantsNearOutputFormatPathParams:
    output_format: GetOccupantsNearOutputFormatOutputFormatEnum = field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    
class GetOccupantsNearOutputFormatLocationDescriptorEnum(str, Enum):
    ANY = "any"
    ACCESS_POINT = "accessPoint"
    FRONT_DOOR_POINT = "frontDoorPoint"
    PARCEL_POINT = "parcelPoint"
    ROOFTOP_POINT = "rooftopPoint"
    ROUTING_POINT = "routingPoint"


@dataclass
class GetOccupantsNearOutputFormatQueryParams:
    point: str = field(metadata={'query_param': { 'field_name': 'point', 'style': 'form', 'explode': True }})
    brief: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'brief', 'style': 'form', 'explode': True }})
    location_descriptor: Optional[GetOccupantsNearOutputFormatLocationDescriptorEnum] = field(default=None, metadata={'query_param': { 'field_name': 'locationDescriptor', 'style': 'form', 'explode': True }})
    max_distance: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxDistance', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    set_back: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'setBack', 'style': 'form', 'explode': True }})
    tags: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOccupantsNearOutputFormatRequest:
    path_params: GetOccupantsNearOutputFormatPathParams = field()
    query_params: GetOccupantsNearOutputFormatQueryParams = field()
    

@dataclass
class GetOccupantsNearOutputFormatResponse:
    content_type: str = field()
    status_code: int = field()
    

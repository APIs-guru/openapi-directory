from dataclasses import dataclass, field
from typing import Enum,Optional

class GetSitesNearestOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    GEOJSON = "geojson"
    XHTML = "xhtml"
    KML = "kml"
    GML = "gml"
    CSV = "csv"
    SHPZ = "shpz"


@dataclass
class GetSitesNearestOutputFormatPathParams:
    output_format: GetSitesNearestOutputFormatOutputFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    
class GetSitesNearestOutputFormatLocationDescriptorEnum(str, Enum):
    ANY = "any"
    ACCESS_POINT = "accessPoint"
    FRONT_DOOR_POINT = "frontDoorPoint"
    PARCEL_POINT = "parcelPoint"
    ROOFTOP_POINT = "rooftopPoint"
    ROUTING_POINT = "routingPoint"


@dataclass
class GetSitesNearestOutputFormatQueryParams:
    brief: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'brief', 'style': 'form', 'explode': True }})
    exclude_units: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'excludeUnits', 'style': 'form', 'explode': True }})
    location_descriptor: Optional[GetSitesNearestOutputFormatLocationDescriptorEnum] = field(default=None, metadata={'query_param': { 'field_name': 'locationDescriptor', 'style': 'form', 'explode': True }})
    max_distance: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxDistance', 'style': 'form', 'explode': True }})
    only_civic: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'onlyCivic', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    point: str = field(default=None, metadata={'query_param': { 'field_name': 'point', 'style': 'form', 'explode': True }})
    set_back: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'setBack', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSitesNearestOutputFormatRequest:
    path_params: GetSitesNearestOutputFormatPathParams = field(default=None)
    query_params: GetSitesNearestOutputFormatQueryParams = field(default=None)
    

@dataclass
class GetSitesNearestOutputFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

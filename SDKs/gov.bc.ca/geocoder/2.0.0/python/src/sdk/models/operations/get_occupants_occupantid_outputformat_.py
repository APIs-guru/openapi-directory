from dataclasses import dataclass, field
from typing import Enum,Optional

class GetOccupantsOccupantIDOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    GEOJSON = "geojson"
    XHTML = "xhtml"
    KML = "kml"
    GML = "gml"
    CSV = "csv"
    SHPZ = "shpz"


@dataclass
class GetOccupantsOccupantIDOutputFormatPathParams:
    occupant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'occupantID', 'style': 'simple', 'explode': False }})
    output_format: GetOccupantsOccupantIDOutputFormatOutputFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    
class GetOccupantsOccupantIDOutputFormatLocationDescriptorEnum(str, Enum):
    ANY = "any"
    ACCESS_POINT = "accessPoint"
    FRONT_DOOR_POINT = "frontDoorPoint"
    PARCEL_POINT = "parcelPoint"
    ROOFTOP_POINT = "rooftopPoint"
    ROUTING_POINT = "routingPoint"


@dataclass
class GetOccupantsOccupantIDOutputFormatQueryParams:
    brief: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'brief', 'style': 'form', 'explode': True }})
    location_descriptor: Optional[GetOccupantsOccupantIDOutputFormatLocationDescriptorEnum] = field(default=None, metadata={'query_param': { 'field_name': 'locationDescriptor', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    set_back: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'setBack', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOccupantsOccupantIDOutputFormatRequest:
    path_params: GetOccupantsOccupantIDOutputFormatPathParams = field(default=None)
    query_params: GetOccupantsOccupantIDOutputFormatQueryParams = field(default=None)
    

@dataclass
class GetOccupantsOccupantIDOutputFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

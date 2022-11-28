from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetSitesSiteIDOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    GEOJSON = "geojson"
    XHTML = "xhtml"
    KML = "kml"
    GML = "gml"
    CSV = "csv"
    SHPZ = "shpz"


@dataclass
class GetSitesSiteIDOutputFormatPathParams:
    output_format: GetSitesSiteIDOutputFormatOutputFormatEnum = field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    site_id: str = field(metadata={'path_param': { 'field_name': 'siteID', 'style': 'simple', 'explode': False }})
    
class GetSitesSiteIDOutputFormatLocationDescriptorEnum(str, Enum):
    ANY = "any"
    ACCESS_POINT = "accessPoint"
    FRONT_DOOR_POINT = "frontDoorPoint"
    PARCEL_POINT = "parcelPoint"
    ROOFTOP_POINT = "rooftopPoint"
    ROUTING_POINT = "routingPoint"


@dataclass
class GetSitesSiteIDOutputFormatQueryParams:
    brief: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'brief', 'style': 'form', 'explode': True }})
    location_descriptor: Optional[GetSitesSiteIDOutputFormatLocationDescriptorEnum] = field(default=None, metadata={'query_param': { 'field_name': 'locationDescriptor', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    set_back: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'setBack', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSitesSiteIDOutputFormatRequest:
    path_params: GetSitesSiteIDOutputFormatPathParams = field()
    query_params: GetSitesSiteIDOutputFormatQueryParams = field()
    

@dataclass
class GetSitesSiteIDOutputFormatResponse:
    content_type: str = field()
    status_code: int = field()
    

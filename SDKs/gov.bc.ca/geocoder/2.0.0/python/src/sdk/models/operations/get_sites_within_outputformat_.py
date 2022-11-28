from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetSitesWithinOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    GEOJSON = "geojson"
    XHTML = "xhtml"
    KML = "kml"
    GML = "gml"
    CSV = "csv"
    SHPZ = "shpz"


@dataclass
class GetSitesWithinOutputFormatPathParams:
    output_format: GetSitesWithinOutputFormatOutputFormatEnum = field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    
class GetSitesWithinOutputFormatLocationDescriptorEnum(str, Enum):
    ANY = "any"
    ACCESS_POINT = "accessPoint"
    FRONT_DOOR_POINT = "frontDoorPoint"
    PARCEL_POINT = "parcelPoint"
    ROOFTOP_POINT = "rooftopPoint"
    ROUTING_POINT = "routingPoint"


@dataclass
class GetSitesWithinOutputFormatQueryParams:
    bbox: str = field(metadata={'query_param': { 'field_name': 'bbox', 'style': 'form', 'explode': True }})
    brief: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'brief', 'style': 'form', 'explode': True }})
    exclude_units: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'excludeUnits', 'style': 'form', 'explode': True }})
    location_descriptor: Optional[GetSitesWithinOutputFormatLocationDescriptorEnum] = field(default=None, metadata={'query_param': { 'field_name': 'locationDescriptor', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    only_civic: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'onlyCivic', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    set_back: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'setBack', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSitesWithinOutputFormatRequest:
    path_params: GetSitesWithinOutputFormatPathParams = field()
    query_params: GetSitesWithinOutputFormatQueryParams = field()
    

@dataclass
class GetSitesWithinOutputFormatResponse:
    content_type: str = field()
    status_code: int = field()
    

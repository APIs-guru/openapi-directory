from dataclasses import dataclass, field
from typing import Enum,Optional

class GetAddressesOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    GEOJSON = "geojson"
    XHTML = "xhtml"
    KML = "kml"
    GML = "gml"
    CSV = "csv"
    SHPZ = "shpz"


@dataclass
class GetAddressesOutputFormatPathParams:
    output_format: GetAddressesOutputFormatOutputFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    
class GetAddressesOutputFormatInterpolationEnum(str, Enum):
    ADAPTIVE = "adaptive"
    LINEAR = "linear"
    NONE = "none"

class GetAddressesOutputFormatLocationDescriptorEnum(str, Enum):
    ANY = "any"
    ACCESS_POINT = "accessPoint"
    FRONT_DOOR_POINT = "frontDoorPoint"
    PARCEL_POINT = "parcelPoint"
    ROOFTOP_POINT = "rooftopPoint"
    ROUTING_POINT = "routingPoint"

class GetAddressesOutputFormatStreetDirectionEnum(str, Enum):
    N = "N"
    S = "S"
    E = "E"
    W = "W"
    O = "O"
    NE = "NE"
    NO = "NO"
    NW = "NW"
    SE = "SE"
    SO = "SO"
    SW = "SW"

class GetAddressesOutputFormatUnitDesignatorEnum(str, Enum):
    APT = "APT"
    BLDG = "BLDG"
    BSMT = "BSMT"
    FLR = "FLR"
    LOBBY = "LOBBY"
    LWR = "LWR"
    PAD = "PAD"
    PH = "PH"
    REAR = "REAR"
    RM = "RM"
    SIDE = "SIDE"
    SITE = "SITE"
    SUITE = "SUITE"
    TH = "TH"
    UNIT = "UNIT"
    UPPR = "UPPR"


@dataclass
class GetAddressesOutputFormatQueryParams:
    address_string: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'addressString', 'style': 'form', 'explode': True }})
    auto_complete: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'autoComplete', 'style': 'form', 'explode': True }})
    bbox: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'bbox', 'style': 'form', 'explode': True }})
    brief: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'brief', 'style': 'form', 'explode': True }})
    centre: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'centre', 'style': 'form', 'explode': True }})
    civic_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'civicNumber', 'style': 'form', 'explode': True }})
    civic_number_suffix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'civicNumberSuffix', 'style': 'form', 'explode': True }})
    echo: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'echo', 'style': 'form', 'explode': True }})
    extrapolate: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'extrapolate', 'style': 'form', 'explode': True }})
    interpolation: Optional[GetAddressesOutputFormatInterpolationEnum] = field(default=None, metadata={'query_param': { 'field_name': 'interpolation', 'style': 'form', 'explode': True }})
    localities: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'localities', 'style': 'form', 'explode': True }})
    locality_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'localityName', 'style': 'form', 'explode': True }})
    location_descriptor: Optional[GetAddressesOutputFormatLocationDescriptorEnum] = field(default=None, metadata={'query_param': { 'field_name': 'locationDescriptor', 'style': 'form', 'explode': True }})
    match_precision: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'matchPrecision', 'style': 'form', 'explode': True }})
    match_precision_not: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'matchPrecisionNot', 'style': 'form', 'explode': True }})
    max_distance: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'maxDistance', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    min_score: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minScore', 'style': 'form', 'explode': True }})
    not_localities: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'notLocalities', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    parcel_point: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parcelPoint', 'style': 'form', 'explode': True }})
    province_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'provinceCode', 'style': 'form', 'explode': True }})
    set_back: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'setBack', 'style': 'form', 'explode': True }})
    site_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'siteName', 'style': 'form', 'explode': True }})
    street_direction: Optional[GetAddressesOutputFormatStreetDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'streetDirection', 'style': 'form', 'explode': True }})
    street_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'streetName', 'style': 'form', 'explode': True }})
    street_qualifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'streetQualifier', 'style': 'form', 'explode': True }})
    street_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'streetType', 'style': 'form', 'explode': True }})
    unit_designator: Optional[GetAddressesOutputFormatUnitDesignatorEnum] = field(default=None, metadata={'query_param': { 'field_name': 'unitDesignator', 'style': 'form', 'explode': True }})
    unit_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'unitNumber', 'style': 'form', 'explode': True }})
    unit_number_suffix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'unitNumberSuffix', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAddressesOutputFormatRequest:
    path_params: GetAddressesOutputFormatPathParams = field(default=None)
    query_params: GetAddressesOutputFormatQueryParams = field(default=None)
    

@dataclass
class GetAddressesOutputFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

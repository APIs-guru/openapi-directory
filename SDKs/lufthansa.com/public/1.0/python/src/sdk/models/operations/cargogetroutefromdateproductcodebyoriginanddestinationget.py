from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum(str, Enum):
    FAN = "FAN"
    FCO = "FCO"
    FCP = "FCP"
    FDG = "FDG"
    FTF = "FTF"
    FUN = "FUN"
    FWN = "FWN"
    YCO = "YCO"
    YCP = "YCP"
    YDG = "YDG"
    YNB = "YNB"
    YNZ = "YNZ"
    YTF = "YTF"
    YUN = "YUN"
    ZXB = "ZXB"
    ZXF = "ZXF"
    ZXR = "ZXR"


@dataclass
class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams:
    destination: str = field(default=None, metadata={'path_param': { 'field_name': 'destination', 'style': 'simple', 'explode': False }})
    from_date: str = field(default=None, metadata={'path_param': { 'field_name': 'fromDate', 'style': 'simple', 'explode': False }})
    origin: str = field(default=None, metadata={'path_param': { 'field_name': 'origin', 'style': 'simple', 'explode': False }})
    product_code: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = field(default=None, metadata={'path_param': { 'field_name': 'productCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest:
    path_params: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams = field(default=None)
    headers: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders = field(default=None)
    security: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity = field(default=None)
    

@dataclass
class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse:
    cargo_get_route_from_date_product_code_by_origin_and_destination_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

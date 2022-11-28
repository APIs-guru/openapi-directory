from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

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
    destination: str = field(metadata={'path_param': { 'field_name': 'destination', 'style': 'simple', 'explode': False }})
    from_date: str = field(metadata={'path_param': { 'field_name': 'fromDate', 'style': 'simple', 'explode': False }})
    origin: str = field(metadata={'path_param': { 'field_name': 'origin', 'style': 'simple', 'explode': False }})
    product_code: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = field(metadata={'path_param': { 'field_name': 'productCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest:
    headers: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders = field()
    path_params: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams = field()
    security: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity = field()
    

@dataclass
class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse:
    content_type: str = field()
    status_code: int = field()
    cargo_get_route_from_date_product_code_by_origin_and_destination_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

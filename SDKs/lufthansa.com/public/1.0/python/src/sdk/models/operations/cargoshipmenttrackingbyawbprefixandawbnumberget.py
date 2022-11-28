from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams:
    a_wb_number: str = field(metadata={'path_param': { 'field_name': 'aWBNumber', 'style': 'simple', 'explode': False }})
    a_wb_prefix: str = field(metadata={'path_param': { 'field_name': 'aWBPrefix', 'style': 'simple', 'explode': False }})
    

@dataclass
class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest:
    headers: CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders = field()
    path_params: CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams = field()
    security: CargoShipmentTrackingByAwbPrefixAndAwbNumberGetSecurity = field()
    

@dataclass
class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse:
    content_type: str = field()
    status_code: int = field()
    cargo_shipment_tracking_by_awb_prefix_and_awb_number_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

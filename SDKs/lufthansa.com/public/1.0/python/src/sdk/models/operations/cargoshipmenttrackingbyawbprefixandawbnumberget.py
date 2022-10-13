from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams:
    a_wb_number: str = field(default=None, metadata={'path_param': { 'field_name': 'aWBNumber', 'style': 'simple', 'explode': False }})
    a_wb_prefix: str = field(default=None, metadata={'path_param': { 'field_name': 'aWBPrefix', 'style': 'simple', 'explode': False }})
    

@dataclass
class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    

@dataclass
class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest:
    path_params: CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams = field(default=None)
    headers: CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders = field(default=None)
    security: CargoShipmentTrackingByAwbPrefixAndAwbNumberGetSecurity = field(default=None)
    

@dataclass
class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse:
    cargo_shipment_tracking_by_awb_prefix_and_awb_number_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

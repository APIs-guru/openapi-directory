from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkPiiSmDevicesForKeyPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkPiiSmDevicesForKeyQueryParams:
    bluetooth_mac: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'bluetoothMac', 'style': 'form', 'explode': True }})
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    imei: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'imei', 'style': 'form', 'explode': True }})
    mac: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac', 'style': 'form', 'explode': True }})
    serial: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'serial', 'style': 'form', 'explode': True }})
    username: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkPiiSmDevicesForKeyRequest:
    path_params: GetNetworkPiiSmDevicesForKeyPathParams = field(default=None)
    query_params: GetNetworkPiiSmDevicesForKeyQueryParams = field(default=None)
    

@dataclass
class GetNetworkPiiSmDevicesForKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_pii_sm_devices_for_key_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

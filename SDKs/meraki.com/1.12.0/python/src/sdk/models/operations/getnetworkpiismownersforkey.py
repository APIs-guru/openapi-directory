from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkPiiSmOwnersForKeyPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkPiiSmOwnersForKeyQueryParams:
    bluetooth_mac: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'bluetoothMac', 'style': 'form', 'explode': True }})
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    imei: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'imei', 'style': 'form', 'explode': True }})
    mac: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac', 'style': 'form', 'explode': True }})
    serial: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'serial', 'style': 'form', 'explode': True }})
    username: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkPiiSmOwnersForKeyRequest:
    path_params: GetNetworkPiiSmOwnersForKeyPathParams = field()
    query_params: GetNetworkPiiSmOwnersForKeyQueryParams = field()
    

@dataclass
class GetNetworkPiiSmOwnersForKeyResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_pii_sm_owners_for_key_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

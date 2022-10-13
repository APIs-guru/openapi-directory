from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSnmpPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSnmpRequest:
    path_params: GetNetworkSnmpPathParams = field(default=None)
    

@dataclass
class GetNetworkSnmpResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_snmp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

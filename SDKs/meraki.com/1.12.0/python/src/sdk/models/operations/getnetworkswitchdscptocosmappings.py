from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchDscpToCosMappingsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchDscpToCosMappingsRequest:
    path_params: GetNetworkSwitchDscpToCosMappingsPathParams = field(default=None)
    

@dataclass
class GetNetworkSwitchDscpToCosMappingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_switch_dscp_to_cos_mappings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

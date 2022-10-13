from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSettingsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSettingsRequest:
    path_params: GetNetworkSettingsPathParams = field(default=None)
    

@dataclass
class GetNetworkSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

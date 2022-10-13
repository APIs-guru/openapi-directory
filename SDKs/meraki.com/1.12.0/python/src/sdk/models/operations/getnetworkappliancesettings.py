from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceSettingsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceSettingsRequest:
    path_params: GetNetworkApplianceSettingsPathParams = field(default=None)
    

@dataclass
class GetNetworkApplianceSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_appliance_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

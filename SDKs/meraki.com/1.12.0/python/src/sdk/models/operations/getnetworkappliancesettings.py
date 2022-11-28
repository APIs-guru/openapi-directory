from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceSettingsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceSettingsRequest:
    path_params: GetNetworkApplianceSettingsPathParams = field()
    

@dataclass
class GetNetworkApplianceSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_appliance_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

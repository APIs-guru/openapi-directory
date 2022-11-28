from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkAlertsSettingsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkAlertsSettingsRequest:
    path_params: GetNetworkAlertsSettingsPathParams = field()
    

@dataclass
class GetNetworkAlertsSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_alerts_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

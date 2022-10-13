from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkAlertsSettingsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkAlertsSettingsRequest:
    path_params: GetNetworkAlertsSettingsPathParams = field(default=None)
    

@dataclass
class GetNetworkAlertsSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_alerts_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

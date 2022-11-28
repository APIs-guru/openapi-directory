from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetPluginConfigurationPathParams:
    plugin_id: str = field(metadata={'path_param': { 'field_name': 'pluginId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPluginConfigurationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPluginConfigurationRequest:
    path_params: GetPluginConfigurationPathParams = field()
    security: GetPluginConfigurationSecurity = field()
    

@dataclass
class GetPluginConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    base_plugin_configuration: Optional[dict[str, Any]] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    

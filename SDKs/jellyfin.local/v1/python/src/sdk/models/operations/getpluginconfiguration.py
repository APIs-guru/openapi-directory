from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPluginConfigurationPathParams:
    plugin_id: str = field(default=None, metadata={'path_param': { 'field_name': 'pluginId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPluginConfigurationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPluginConfigurationRequest:
    path_params: GetPluginConfigurationPathParams = field(default=None)
    security: GetPluginConfigurationSecurity = field(default=None)
    

@dataclass
class GetPluginConfigurationResponse:
    base_plugin_configuration: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    

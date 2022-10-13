from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UpdatePluginConfigurationPathParams:
    plugin_id: str = field(default=None, metadata={'path_param': { 'field_name': 'pluginId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePluginConfigurationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdatePluginConfigurationRequest:
    path_params: UpdatePluginConfigurationPathParams = field(default=None)
    security: UpdatePluginConfigurationSecurity = field(default=None)
    

@dataclass
class UpdatePluginConfigurationResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UninstallPluginPathParams:
    plugin_id: str = field(default=None, metadata={'path_param': { 'field_name': 'pluginId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UninstallPluginSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UninstallPluginRequest:
    path_params: UninstallPluginPathParams = field(default=None)
    security: UninstallPluginSecurity = field(default=None)
    

@dataclass
class UninstallPluginResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    

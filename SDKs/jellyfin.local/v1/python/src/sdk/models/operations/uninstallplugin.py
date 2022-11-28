from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UninstallPluginPathParams:
    plugin_id: str = field(metadata={'path_param': { 'field_name': 'pluginId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UninstallPluginSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UninstallPluginRequest:
    path_params: UninstallPluginPathParams = field()
    security: UninstallPluginSecurity = field()
    

@dataclass
class UninstallPluginResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    

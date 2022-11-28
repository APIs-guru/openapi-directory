from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UninstallPluginByVersionPathParamsInput:
    plugin_id: str = field(metadata={'path_param': { 'field_name': 'pluginId', 'style': 'simple', 'explode': False }})
    version: shared.Version = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class UninstallPluginByVersionSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UninstallPluginByVersionRequest:
    path_params: UninstallPluginByVersionPathParamsInput = field()
    security: UninstallPluginByVersionSecurity = field()
    

@dataclass
class UninstallPluginByVersionResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    

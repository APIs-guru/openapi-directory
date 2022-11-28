from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DisablePluginPathParamsInput:
    plugin_id: str = field(metadata={'path_param': { 'field_name': 'pluginId', 'style': 'simple', 'explode': False }})
    version: shared.Version = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisablePluginSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisablePluginRequest:
    path_params: DisablePluginPathParamsInput = field()
    security: DisablePluginSecurity = field()
    

@dataclass
class DisablePluginResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    

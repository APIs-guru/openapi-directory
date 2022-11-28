from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class EnablePluginPathParamsInput:
    plugin_id: str = field(metadata={'path_param': { 'field_name': 'pluginId', 'style': 'simple', 'explode': False }})
    version: shared.Version = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnablePluginSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnablePluginRequest:
    path_params: EnablePluginPathParamsInput = field()
    security: EnablePluginSecurity = field()
    

@dataclass
class EnablePluginResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    

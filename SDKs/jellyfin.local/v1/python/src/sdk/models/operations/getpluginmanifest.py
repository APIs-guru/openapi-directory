from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPluginManifestPathParams:
    plugin_id: str = field(default=None, metadata={'path_param': { 'field_name': 'pluginId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPluginManifestSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPluginManifestRequest:
    path_params: GetPluginManifestPathParams = field(default=None)
    security: GetPluginManifestSecurity = field(default=None)
    

@dataclass
class GetPluginManifestResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    

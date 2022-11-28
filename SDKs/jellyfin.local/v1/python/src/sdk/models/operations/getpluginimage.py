from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetPluginImagePathParamsInput:
    plugin_id: str = field(metadata={'path_param': { 'field_name': 'pluginId', 'style': 'simple', 'explode': False }})
    version: shared.Version = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPluginImageSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPluginImageRequest:
    path_params: GetPluginImagePathParamsInput = field()
    security: GetPluginImageSecurity = field()
    

@dataclass
class GetPluginImageResponse:
    content_type: str = field()
    status_code: int = field()
    get_plugin_image_200_image_wildcard_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    

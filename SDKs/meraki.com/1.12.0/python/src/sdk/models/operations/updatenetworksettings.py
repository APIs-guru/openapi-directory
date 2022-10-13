from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkSettingsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSettingsRequestBodySecureConnect:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSettingsRequestBody:
    local_status_page_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localStatusPageEnabled' }})
    remote_status_page_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteStatusPageEnabled' }})
    secure_connect: Optional[UpdateNetworkSettingsRequestBodySecureConnect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secureConnect' }})
    

@dataclass
class UpdateNetworkSettingsRequest:
    path_params: UpdateNetworkSettingsPathParams = field(default=None)
    request: Optional[UpdateNetworkSettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

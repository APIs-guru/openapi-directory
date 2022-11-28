from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkSettingsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSettingsRequestBodySecureConnect:
    r"""UpdateNetworkSettingsRequestBodySecureConnect
    A hash of SecureConnect options applied to the Network.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSettingsRequestBody:
    local_status_page_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localStatusPageEnabled') }})
    remote_status_page_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteStatusPageEnabled') }})
    secure_connect: Optional[UpdateNetworkSettingsRequestBodySecureConnect] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secureConnect') }})
    

@dataclass
class UpdateNetworkSettingsRequest:
    path_params: UpdateNetworkSettingsPathParams = field()
    request: Optional[UpdateNetworkSettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

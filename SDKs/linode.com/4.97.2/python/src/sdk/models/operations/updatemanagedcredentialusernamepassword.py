from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateManagedCredentialUsernamePasswordPathParams:
    credential_id: int = field(metadata={'path_param': { 'field_name': 'credentialId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateManagedCredentialUsernamePasswordSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateManagedCredentialUsernamePasswordDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateManagedCredentialUsernamePasswordRequest:
    path_params: UpdateManagedCredentialUsernamePasswordPathParams = field()
    security: UpdateManagedCredentialUsernamePasswordSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateManagedCredentialUsernamePasswordResponse:
    content_type: str = field()
    status_code: int = field()
    update_managed_credential_username_password_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    update_managed_credential_username_password_default_application_json_object: Optional[UpdateManagedCredentialUsernamePasswordDefaultApplicationJSON] = field(default=None)
    

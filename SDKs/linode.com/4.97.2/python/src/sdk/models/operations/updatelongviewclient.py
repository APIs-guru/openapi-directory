from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateLongviewClientPathParams:
    client_id: int = field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLongviewClientSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateLongviewClientDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateLongviewClientRequest:
    path_params: UpdateLongviewClientPathParams = field()
    request: shared.LongviewClientInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateLongviewClientSecurity = field()
    

@dataclass
class UpdateLongviewClientResponse:
    content_type: str = field()
    status_code: int = field()
    longview_client: Optional[shared.LongviewClient] = field(default=None)
    update_longview_client_default_application_json_object: Optional[UpdateLongviewClientDefaultApplicationJSON] = field(default=None)
    

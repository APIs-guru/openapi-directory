from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SetClientThumbnailPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetClientThumbnailSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class SetClientThumbnailDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class SetClientThumbnailRequest:
    path_params: SetClientThumbnailPathParams = field()
    request: bytes = field(metadata={'request': { 'media_type': 'image/png' }})
    security: SetClientThumbnailSecurity = field()
    

@dataclass
class SetClientThumbnailResponse:
    content_type: str = field()
    status_code: int = field()
    set_client_thumbnail_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    set_client_thumbnail_default_application_json_object: Optional[SetClientThumbnailDefaultApplicationJSON] = field(default=None)
    

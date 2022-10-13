from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SetClientThumbnailPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetClientThumbnailSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class SetClientThumbnailSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SetClientThumbnailSecurity:
    option1: Optional[SetClientThumbnailSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SetClientThumbnailSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class SetClientThumbnailRequest:
    path_params: SetClientThumbnailPathParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'image/png' }})
    security: SetClientThumbnailSecurity = field(default=None)
    

@dataclass_json
@dataclass
class SetClientThumbnailDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class SetClientThumbnailResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_client_thumbnail_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    set_client_thumbnail_default_application_json_object: Optional[SetClientThumbnailDefaultApplicationJSON] = field(default=None)
    

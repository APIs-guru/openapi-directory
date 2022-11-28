from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


POST_IMAGES_UPLOAD_SERVERS = [
	"https://api.linode.com/v4",
	"https://api.linode.com/v4beta",
]


@dataclass_json
@dataclass
class PostImagesUploadRequestBody:
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass
class PostImagesUploadSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PostImagesUpload200ApplicationJSON:
    image: Optional[shared.ImagePrivate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    upload_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_to') }})
    

@dataclass_json
@dataclass
class PostImagesUploadDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class PostImagesUploadRequest:
    security: PostImagesUploadSecurity = field()
    request: Optional[PostImagesUploadRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class PostImagesUploadResponse:
    content_type: str = field()
    status_code: int = field()
    post_images_upload_200_application_json_object: Optional[PostImagesUpload200ApplicationJSON] = field(default=None)
    post_images_upload_default_application_json_object: Optional[PostImagesUploadDefaultApplicationJSON] = field(default=None)
    

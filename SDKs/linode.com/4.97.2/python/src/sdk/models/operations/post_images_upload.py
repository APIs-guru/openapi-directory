from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
POST_IMAGES_UPLOAD_SERVERS = [
	"https://api.linode.com/v4",
	"https://api.linode.com/v4beta",
]


@dataclass_json
@dataclass
class PostImagesUploadRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    

@dataclass
class PostImagesUploadSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostImagesUploadSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostImagesUploadSecurity:
    option1: Optional[PostImagesUploadSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostImagesUploadSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostImagesUploadRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[PostImagesUploadRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostImagesUploadSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostImagesUpload200ApplicationJSON:
    image: Optional[shared.ImagePrivate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    upload_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upload_to' }})
    

@dataclass_json
@dataclass
class PostImagesUploadDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class PostImagesUploadResponse:
    content_type: str = field(default=None)
    post_images_upload_200_application_json_object: Optional[PostImagesUpload200ApplicationJSON] = field(default=None)
    post_images_upload_default_application_json_object: Optional[PostImagesUploadDefaultApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    

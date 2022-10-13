from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostCoursesRootContentIDPermissionsUserEmailPathParams:
    root_content_id: str = field(default=None, metadata={'path_param': { 'field_name': 'rootContentId', 'style': 'simple', 'explode': False }})
    user_email: str = field(default=None, metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostCoursesRootContentIDPermissionsUserEmailRequestBodyPermissionToBeGrantedToTheUser:
    is_builder: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isBuilder' }})
    is_reviewer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isReviewer' }})
    

@dataclass
class PostCoursesRootContentIDPermissionsUserEmailRequest:
    path_params: PostCoursesRootContentIDPermissionsUserEmailPathParams = field(default=None)
    request: PostCoursesRootContentIDPermissionsUserEmailRequestBodyPermissionToBeGrantedToTheUser = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostCoursesRootContentIDPermissionsUserEmail201ApplicationJSON:
    content_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentId' }})
    

@dataclass
class PostCoursesRootContentIDPermissionsUserEmailResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    post_courses_root_content_id_permissions_user_email_201_application_json_object: Optional[PostCoursesRootContentIDPermissionsUserEmail201ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsGetPathParams:
    course_id: str = field(metadata={'path_param': { 'field_name': 'courseId', 'style': 'simple', 'explode': False }})
    course_work_id: str = field(metadata={'path_param': { 'field_name': 'courseWorkId', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity:
    option1: Optional[ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsGetRequest:
    path_params: ClassroomCoursesCourseWorkStudentSubmissionsGetPathParams = field()
    query_params: ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams = field()
    security: ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity = field()
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsGetResponse:
    content_type: str = field()
    status_code: int = field()
    student_submission: Optional[shared.StudentSubmission] = field(default=None)
    

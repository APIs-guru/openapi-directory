from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsListPathParams:
    course_id: str = field(default=None, metadata={'path_param': { 'field_name': 'courseId', 'style': 'simple', 'explode': False }})
    course_work_id: str = field(default=None, metadata={'path_param': { 'field_name': 'courseWorkId', 'style': 'simple', 'explode': False }})
    
class ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum(str, Enum):
    LATE_VALUES_UNSPECIFIED = "LATE_VALUES_UNSPECIFIED"
    LATE_ONLY = "LATE_ONLY"
    NOT_LATE_ONLY = "NOT_LATE_ONLY"

class ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum(str, Enum):
    SUBMISSION_STATE_UNSPECIFIED = "SUBMISSION_STATE_UNSPECIFIED"
    NEW = "NEW"
    CREATED = "CREATED"
    TURNED_IN = "TURNED_IN"
    RETURNED = "RETURNED"
    RECLAIMED_BY_STUDENT = "RECLAIMED_BY_STUDENT"


@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    late: Optional[ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'late', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    states: Optional[List[ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'states', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsListSecurity:
    option1: Optional[ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsListRequest:
    path_params: ClassroomCoursesCourseWorkStudentSubmissionsListPathParams = field(default=None)
    query_params: ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams = field(default=None)
    security: ClassroomCoursesCourseWorkStudentSubmissionsListSecurity = field(default=None)
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsListResponse:
    content_type: str = field(default=None)
    list_student_submissions_response: Optional[shared.ListStudentSubmissionsResponse] = field(default=None)
    status_code: int = field(default=None)
    

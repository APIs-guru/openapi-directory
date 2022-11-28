from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsPatchPathParams:
    course_id: str = field(metadata={'path_param': { 'field_name': 'courseId', 'style': 'simple', 'explode': False }})
    course_work_id: str = field(metadata={'path_param': { 'field_name': 'courseWorkId', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    update_mask: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'updateMask', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity:
    option1: Optional[ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest:
    path_params: ClassroomCoursesCourseWorkStudentSubmissionsPatchPathParams = field()
    query_params: ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams = field()
    security: ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity = field()
    request: Optional[shared.StudentSubmission] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsPatchResponse:
    content_type: str = field()
    status_code: int = field()
    student_submission: Optional[shared.StudentSubmission] = field(default=None)
    

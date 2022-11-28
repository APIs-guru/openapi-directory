from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ClassroomCoursesAnnouncementsListPathParams:
    course_id: str = field(metadata={'path_param': { 'field_name': 'courseId', 'style': 'simple', 'explode': False }})
    
class ClassroomCoursesAnnouncementsListAnnouncementStatesEnum(str, Enum):
    ANNOUNCEMENT_STATE_UNSPECIFIED = "ANNOUNCEMENT_STATE_UNSPECIFIED"
    PUBLISHED = "PUBLISHED"
    DRAFT = "DRAFT"
    DELETED = "DELETED"


@dataclass
class ClassroomCoursesAnnouncementsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    announcement_states: Optional[List[ClassroomCoursesAnnouncementsListAnnouncementStatesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'announcementStates', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ClassroomCoursesAnnouncementsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClassroomCoursesAnnouncementsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClassroomCoursesAnnouncementsListSecurity:
    option1: Optional[ClassroomCoursesAnnouncementsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ClassroomCoursesAnnouncementsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ClassroomCoursesAnnouncementsListRequest:
    path_params: ClassroomCoursesAnnouncementsListPathParams = field()
    query_params: ClassroomCoursesAnnouncementsListQueryParams = field()
    security: ClassroomCoursesAnnouncementsListSecurity = field()
    

@dataclass
class ClassroomCoursesAnnouncementsListResponse:
    content_type: str = field()
    status_code: int = field()
    list_announcements_response: Optional[shared.ListAnnouncementsResponse] = field(default=None)
    

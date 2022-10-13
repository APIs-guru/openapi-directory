from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class ClassroomUserProfilesGuardianInvitationsListPathParams:
    student_id: str = field(default=None, metadata={'path_param': { 'field_name': 'studentId', 'style': 'simple', 'explode': False }})
    
class ClassroomUserProfilesGuardianInvitationsListStatesEnum(str, Enum):
    GUARDIAN_INVITATION_STATE_UNSPECIFIED = "GUARDIAN_INVITATION_STATE_UNSPECIFIED"
    PENDING = "PENDING"
    COMPLETE = "COMPLETE"


@dataclass
class ClassroomUserProfilesGuardianInvitationsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    invited_email_address: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'invitedEmailAddress', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    states: Optional[List[ClassroomUserProfilesGuardianInvitationsListStatesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'states', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ClassroomUserProfilesGuardianInvitationsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClassroomUserProfilesGuardianInvitationsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClassroomUserProfilesGuardianInvitationsListSecurity:
    option1: Optional[ClassroomUserProfilesGuardianInvitationsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ClassroomUserProfilesGuardianInvitationsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ClassroomUserProfilesGuardianInvitationsListRequest:
    path_params: ClassroomUserProfilesGuardianInvitationsListPathParams = field(default=None)
    query_params: ClassroomUserProfilesGuardianInvitationsListQueryParams = field(default=None)
    security: ClassroomUserProfilesGuardianInvitationsListSecurity = field(default=None)
    

@dataclass
class ClassroomUserProfilesGuardianInvitationsListResponse:
    content_type: str = field(default=None)
    list_guardian_invitations_response: Optional[shared.ListGuardianInvitationsResponse] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class ClassroomUserProfilesGuardianInvitationsGetPathParams:
    invitation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'invitationId', 'style': 'simple', 'explode': False }})
    student_id: str = field(default=None, metadata={'path_param': { 'field_name': 'studentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ClassroomUserProfilesGuardianInvitationsGetQueryParams:
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
class ClassroomUserProfilesGuardianInvitationsGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClassroomUserProfilesGuardianInvitationsGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClassroomUserProfilesGuardianInvitationsGetSecurity:
    option1: Optional[ClassroomUserProfilesGuardianInvitationsGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ClassroomUserProfilesGuardianInvitationsGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ClassroomUserProfilesGuardianInvitationsGetRequest:
    path_params: ClassroomUserProfilesGuardianInvitationsGetPathParams = field(default=None)
    query_params: ClassroomUserProfilesGuardianInvitationsGetQueryParams = field(default=None)
    security: ClassroomUserProfilesGuardianInvitationsGetSecurity = field(default=None)
    

@dataclass
class ClassroomUserProfilesGuardianInvitationsGetResponse:
    content_type: str = field(default=None)
    guardian_invitation: Optional[shared.GuardianInvitation] = field(default=None)
    status_code: int = field(default=None)
    

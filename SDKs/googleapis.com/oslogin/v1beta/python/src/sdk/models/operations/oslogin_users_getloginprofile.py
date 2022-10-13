from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class OsloginUsersGetLoginProfilePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    
class OsloginUsersGetLoginProfileViewEnum(str, Enum):
    LOGIN_PROFILE_VIEW_UNSPECIFIED = "LOGIN_PROFILE_VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    SECURITY_KEY = "SECURITY_KEY"


@dataclass
class OsloginUsersGetLoginProfileQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    project_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    system_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'systemId', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    view: Optional[OsloginUsersGetLoginProfileViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class OsloginUsersGetLoginProfileSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OsloginUsersGetLoginProfileSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OsloginUsersGetLoginProfileSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OsloginUsersGetLoginProfileSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OsloginUsersGetLoginProfileSecurity:
    option1: Optional[OsloginUsersGetLoginProfileSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[OsloginUsersGetLoginProfileSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[OsloginUsersGetLoginProfileSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[OsloginUsersGetLoginProfileSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class OsloginUsersGetLoginProfileRequest:
    path_params: OsloginUsersGetLoginProfilePathParams = field(default=None)
    query_params: OsloginUsersGetLoginProfileQueryParams = field(default=None)
    security: OsloginUsersGetLoginProfileSecurity = field(default=None)
    

@dataclass
class OsloginUsersGetLoginProfileResponse:
    content_type: str = field(default=None)
    login_profile: Optional[shared.LoginProfile] = field(default=None)
    status_code: int = field(default=None)
    

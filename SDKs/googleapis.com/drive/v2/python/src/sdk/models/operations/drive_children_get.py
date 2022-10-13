from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class DriveChildrenGetPathParams:
    child_id: str = field(default=None, metadata={'path_param': { 'field_name': 'childId', 'style': 'simple', 'explode': False }})
    folder_id: str = field(default=None, metadata={'path_param': { 'field_name': 'folderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DriveChildrenGetQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class DriveChildrenGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChildrenGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChildrenGetSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChildrenGetSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChildrenGetSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChildrenGetSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChildrenGetSecurityOption7:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChildrenGetSecurity:
    option1: Optional[DriveChildrenGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DriveChildrenGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DriveChildrenGetSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[DriveChildrenGetSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[DriveChildrenGetSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[DriveChildrenGetSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    option7: Optional[DriveChildrenGetSecurityOption7] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DriveChildrenGetRequest:
    path_params: DriveChildrenGetPathParams = field(default=None)
    query_params: DriveChildrenGetQueryParams = field(default=None)
    security: DriveChildrenGetSecurity = field(default=None)
    

@dataclass
class DriveChildrenGetResponse:
    child_reference: Optional[shared.ChildReference] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

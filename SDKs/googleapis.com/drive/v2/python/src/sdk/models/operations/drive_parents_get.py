from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class DriveParentsGetPathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    parent_id: str = field(default=None, metadata={'path_param': { 'field_name': 'parentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DriveParentsGetQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class DriveParentsGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveParentsGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveParentsGetSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveParentsGetSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveParentsGetSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveParentsGetSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveParentsGetSecurityOption7:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveParentsGetSecurity:
    option1: Optional[DriveParentsGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DriveParentsGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DriveParentsGetSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[DriveParentsGetSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[DriveParentsGetSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[DriveParentsGetSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    option7: Optional[DriveParentsGetSecurityOption7] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DriveParentsGetRequest:
    path_params: DriveParentsGetPathParams = field(default=None)
    query_params: DriveParentsGetQueryParams = field(default=None)
    security: DriveParentsGetSecurity = field(default=None)
    

@dataclass
class DriveParentsGetResponse:
    content_type: str = field(default=None)
    parent_reference: Optional[shared.ParentReference] = field(default=None)
    status_code: int = field(default=None)
    

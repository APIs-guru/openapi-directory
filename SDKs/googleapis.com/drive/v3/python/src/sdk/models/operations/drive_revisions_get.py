from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class DriveRevisionsGetPathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    revision_id: str = field(default=None, metadata={'path_param': { 'field_name': 'revisionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DriveRevisionsGetQueryParams:
    acknowledge_abuse: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'acknowledgeAbuse', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class DriveRevisionsGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveRevisionsGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveRevisionsGetSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveRevisionsGetSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveRevisionsGetSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveRevisionsGetSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveRevisionsGetSecurityOption7:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveRevisionsGetSecurity:
    option1: Optional[DriveRevisionsGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DriveRevisionsGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DriveRevisionsGetSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[DriveRevisionsGetSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[DriveRevisionsGetSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[DriveRevisionsGetSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    option7: Optional[DriveRevisionsGetSecurityOption7] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DriveRevisionsGetRequest:
    path_params: DriveRevisionsGetPathParams = field(default=None)
    query_params: DriveRevisionsGetQueryParams = field(default=None)
    security: DriveRevisionsGetSecurity = field(default=None)
    

@dataclass
class DriveRevisionsGetResponse:
    content_type: str = field(default=None)
    revision: Optional[shared.Revision] = field(default=None)
    status_code: int = field(default=None)
    

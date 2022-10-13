from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class DriveCommentsPatchPathParams:
    comment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DriveCommentsPatchQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class DriveCommentsPatchSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveCommentsPatchSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveCommentsPatchSecurity:
    option1: Optional[DriveCommentsPatchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DriveCommentsPatchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DriveCommentsPatchRequest:
    path_params: DriveCommentsPatchPathParams = field(default=None)
    query_params: DriveCommentsPatchQueryParams = field(default=None)
    request: Optional[shared.Comment] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: DriveCommentsPatchSecurity = field(default=None)
    

@dataclass
class DriveCommentsPatchResponse:
    comment: Optional[shared.Comment] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

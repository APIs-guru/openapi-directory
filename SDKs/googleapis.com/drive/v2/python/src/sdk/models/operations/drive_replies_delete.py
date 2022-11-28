from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DriveRepliesDeletePathParams:
    comment_id: str = field(metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    file_id: str = field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    reply_id: str = field(metadata={'path_param': { 'field_name': 'replyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DriveRepliesDeleteQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class DriveRepliesDeleteSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveRepliesDeleteSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveRepliesDeleteSecurity:
    option1: Optional[DriveRepliesDeleteSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DriveRepliesDeleteSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DriveRepliesDeleteRequest:
    path_params: DriveRepliesDeletePathParams = field()
    query_params: DriveRepliesDeleteQueryParams = field()
    security: DriveRepliesDeleteSecurity = field()
    

@dataclass
class DriveRepliesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    

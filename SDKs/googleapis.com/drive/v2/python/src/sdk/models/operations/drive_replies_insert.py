from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DriveRepliesInsertPathParams:
    comment_id: str = field(metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    file_id: str = field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DriveRepliesInsertQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class DriveRepliesInsertSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveRepliesInsertSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveRepliesInsertSecurity:
    option1: Optional[DriveRepliesInsertSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DriveRepliesInsertSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DriveRepliesInsertRequest:
    path_params: DriveRepliesInsertPathParams = field()
    query_params: DriveRepliesInsertQueryParams = field()
    security: DriveRepliesInsertSecurity = field()
    request: Optional[shared.CommentReply] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DriveRepliesInsertResponse:
    content_type: str = field()
    status_code: int = field()
    comment_reply: Optional[shared.CommentReply] = field(default=None)
    

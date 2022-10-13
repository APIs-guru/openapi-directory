from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class MirrorTimelinePatchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class MirrorTimelinePatchQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class MirrorTimelinePatchSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MirrorTimelinePatchSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MirrorTimelinePatchSecurity:
    option1: Optional[MirrorTimelinePatchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[MirrorTimelinePatchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class MirrorTimelinePatchRequest:
    path_params: MirrorTimelinePatchPathParams = field(default=None)
    query_params: MirrorTimelinePatchQueryParams = field(default=None)
    request: Optional[shared.TimelineItem] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: MirrorTimelinePatchSecurity = field(default=None)
    

@dataclass
class MirrorTimelinePatchResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class SpannerProjectsInstancesDatabasesSessionsCreatePathParams:
    database: str = field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    

@dataclass
class SpannerProjectsInstancesDatabasesSessionsCreateQueryParams:
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
class SpannerProjectsInstancesDatabasesSessionsCreateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SpannerProjectsInstancesDatabasesSessionsCreateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SpannerProjectsInstancesDatabasesSessionsCreateSecurity:
    option1: Optional[SpannerProjectsInstancesDatabasesSessionsCreateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SpannerProjectsInstancesDatabasesSessionsCreateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class SpannerProjectsInstancesDatabasesSessionsCreateRequest:
    path_params: SpannerProjectsInstancesDatabasesSessionsCreatePathParams = field()
    query_params: SpannerProjectsInstancesDatabasesSessionsCreateQueryParams = field()
    security: SpannerProjectsInstancesDatabasesSessionsCreateSecurity = field()
    request: Optional[shared.CreateSessionRequestInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SpannerProjectsInstancesDatabasesSessionsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    session: Optional[shared.Session] = field(default=None)
    

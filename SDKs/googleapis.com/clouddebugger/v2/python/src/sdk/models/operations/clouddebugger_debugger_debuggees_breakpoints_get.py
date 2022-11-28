from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ClouddebuggerDebuggerDebuggeesBreakpointsGetPathParams:
    breakpoint_id: str = field(metadata={'path_param': { 'field_name': 'breakpointId', 'style': 'simple', 'explode': False }})
    debuggee_id: str = field(metadata={'path_param': { 'field_name': 'debuggeeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    client_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clientVersion', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurity:
    option1: Optional[ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest:
    path_params: ClouddebuggerDebuggerDebuggeesBreakpointsGetPathParams = field()
    query_params: ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams = field()
    security: ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurity = field()
    

@dataclass
class ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse:
    content_type: str = field()
    status_code: int = field()
    get_breakpoint_response: Optional[shared.GetBreakpointResponse] = field(default=None)
    

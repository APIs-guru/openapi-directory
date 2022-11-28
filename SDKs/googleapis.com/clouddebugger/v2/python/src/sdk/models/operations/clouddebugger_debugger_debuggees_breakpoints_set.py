from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ClouddebuggerDebuggerDebuggeesBreakpointsSetPathParams:
    debuggee_id: str = field(metadata={'path_param': { 'field_name': 'debuggeeId', 'style': 'simple', 'explode': False }})
    
class ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum(str, Enum):
    CANARY_OPTION_UNSPECIFIED = "CANARY_OPTION_UNSPECIFIED"
    CANARY_OPTION_TRY_ENABLE = "CANARY_OPTION_TRY_ENABLE"
    CANARY_OPTION_TRY_DISABLE = "CANARY_OPTION_TRY_DISABLE"


@dataclass
class ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    canary_option: Optional[ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'canaryOption', 'style': 'form', 'explode': True }})
    client_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clientVersion', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity:
    option1: Optional[ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest:
    path_params: ClouddebuggerDebuggerDebuggeesBreakpointsSetPathParams = field()
    query_params: ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams = field()
    security: ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity = field()
    request: Optional[shared.Breakpoint] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse:
    content_type: str = field()
    status_code: int = field()
    set_breakpoint_response: Optional[shared.SetBreakpointResponse] = field(default=None)
    

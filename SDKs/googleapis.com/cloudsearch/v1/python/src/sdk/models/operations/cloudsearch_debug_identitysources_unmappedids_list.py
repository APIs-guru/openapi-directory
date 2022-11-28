from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class CloudsearchDebugIdentitysourcesUnmappedidsListPathParams:
    parent: str = field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    
class CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum(str, Enum):
    CODE_UNSPECIFIED = "CODE_UNSPECIFIED"
    NOT_FOUND = "NOT_FOUND"
    IDENTITY_SOURCE_NOT_FOUND = "IDENTITY_SOURCE_NOT_FOUND"
    IDENTITY_SOURCE_MISCONFIGURED = "IDENTITY_SOURCE_MISCONFIGURED"
    TOO_MANY_MAPPINGS_FOUND = "TOO_MANY_MAPPINGS_FOUND"
    INTERNAL_ERROR = "INTERNAL_ERROR"


@dataclass
class CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    debug_options_enable_debugging: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'debugOptions.enableDebugging', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    resolution_status_code: Optional[CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'resolutionStatusCode', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudsearchDebugIdentitysourcesUnmappedidsListSecurity:
    option1: Optional[CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CloudsearchDebugIdentitysourcesUnmappedidsListRequest:
    path_params: CloudsearchDebugIdentitysourcesUnmappedidsListPathParams = field()
    query_params: CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams = field()
    security: CloudsearchDebugIdentitysourcesUnmappedidsListSecurity = field()
    

@dataclass
class CloudsearchDebugIdentitysourcesUnmappedidsListResponse:
    content_type: str = field()
    status_code: int = field()
    list_unmapped_identities_response: Optional[shared.ListUnmappedIdentitiesResponse] = field(default=None)
    

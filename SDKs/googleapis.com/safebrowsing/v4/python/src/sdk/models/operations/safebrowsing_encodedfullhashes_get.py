from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class SafebrowsingEncodedFullHashesGetPathParams:
    encoded_request: str = field(default=None, metadata={'path_param': { 'field_name': 'encodedRequest', 'style': 'simple', 'explode': False }})
    

@dataclass
class SafebrowsingEncodedFullHashesGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    client_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clientId', 'style': 'form', 'explode': True }})
    client_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clientVersion', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class SafebrowsingEncodedFullHashesGetRequest:
    path_params: SafebrowsingEncodedFullHashesGetPathParams = field(default=None)
    query_params: SafebrowsingEncodedFullHashesGetQueryParams = field(default=None)
    

@dataclass
class SafebrowsingEncodedFullHashesGetResponse:
    content_type: str = field(default=None)
    google_security_safebrowsing_v4_find_full_hashes_response: Optional[shared.GoogleSecuritySafebrowsingV4FindFullHashesResponse] = field(default=None)
    status_code: int = field(default=None)
    

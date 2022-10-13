from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class WebmastersSitemapsGetPathParams:
    feedpath: str = field(default=None, metadata={'path_param': { 'field_name': 'feedpath', 'style': 'simple', 'explode': False }})
    site_url: str = field(default=None, metadata={'path_param': { 'field_name': 'siteUrl', 'style': 'simple', 'explode': False }})
    

@dataclass
class WebmastersSitemapsGetQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class WebmastersSitemapsGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class WebmastersSitemapsGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class WebmastersSitemapsGetSecurity:
    option1: Optional[WebmastersSitemapsGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[WebmastersSitemapsGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class WebmastersSitemapsGetRequest:
    path_params: WebmastersSitemapsGetPathParams = field(default=None)
    query_params: WebmastersSitemapsGetQueryParams = field(default=None)
    security: WebmastersSitemapsGetSecurity = field(default=None)
    

@dataclass
class WebmastersSitemapsGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    wmx_sitemap: Optional[shared.WmxSitemap] = field(default=None)
    

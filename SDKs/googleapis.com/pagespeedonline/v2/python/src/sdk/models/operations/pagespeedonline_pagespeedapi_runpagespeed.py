from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class PagespeedonlinePagespeedapiRunpagespeedStrategyEnum(str, Enum):
    DESKTOP = "desktop"
    MOBILE = "mobile"


@dataclass
class PagespeedonlinePagespeedapiRunpagespeedQueryParams:
    url: str = field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter_third_party_resources: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'filter_third_party_resources', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    rule: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'rule', 'style': 'form', 'explode': True }})
    screenshot: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'screenshot', 'style': 'form', 'explode': True }})
    strategy: Optional[PagespeedonlinePagespeedapiRunpagespeedStrategyEnum] = field(default=None, metadata={'query_param': { 'field_name': 'strategy', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class PagespeedonlinePagespeedapiRunpagespeedRequest:
    query_params: PagespeedonlinePagespeedapiRunpagespeedQueryParams = field()
    

@dataclass
class PagespeedonlinePagespeedapiRunpagespeedResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

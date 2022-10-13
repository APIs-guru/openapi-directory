from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class PagespeedonlinePagespeedapiRunpagespeedStrategyEnum(str, Enum):
    DESKTOP = "desktop"
    MOBILE = "mobile"


@dataclass
class PagespeedonlinePagespeedapiRunpagespeedQueryParams:
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
    snapshots: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'snapshots', 'style': 'form', 'explode': True }})
    strategy: Optional[PagespeedonlinePagespeedapiRunpagespeedStrategyEnum] = field(default=None, metadata={'query_param': { 'field_name': 'strategy', 'style': 'form', 'explode': True }})
    url: str = field(default=None, metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    utm_campaign: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'utm_campaign', 'style': 'form', 'explode': True }})
    utm_source: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'utm_source', 'style': 'form', 'explode': True }})
    

@dataclass
class PagespeedonlinePagespeedapiRunpagespeedRequest:
    query_params: PagespeedonlinePagespeedapiRunpagespeedQueryParams = field(default=None)
    

@dataclass
class PagespeedonlinePagespeedapiRunpagespeedResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

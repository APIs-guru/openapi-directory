from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class PagespeedonlinePagespeedapiRunpagespeedCategoryEnum(str, Enum):
    CATEGORY_UNSPECIFIED = "CATEGORY_UNSPECIFIED"
    ACCESSIBILITY = "ACCESSIBILITY"
    BEST_PRACTICES = "BEST_PRACTICES"
    PERFORMANCE = "PERFORMANCE"
    PWA = "PWA"
    SEO = "SEO"

class PagespeedonlinePagespeedapiRunpagespeedStrategyEnum(str, Enum):
    STRATEGY_UNSPECIFIED = "STRATEGY_UNSPECIFIED"
    DESKTOP = "DESKTOP"
    MOBILE = "MOBILE"


@dataclass
class PagespeedonlinePagespeedapiRunpagespeedQueryParams:
    url: str = field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    captcha_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'captchaToken', 'style': 'form', 'explode': True }})
    category: Optional[List[PagespeedonlinePagespeedapiRunpagespeedCategoryEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    strategy: Optional[PagespeedonlinePagespeedapiRunpagespeedStrategyEnum] = field(default=None, metadata={'query_param': { 'field_name': 'strategy', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    utm_campaign: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'utm_campaign', 'style': 'form', 'explode': True }})
    utm_source: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'utm_source', 'style': 'form', 'explode': True }})
    

@dataclass
class PagespeedonlinePagespeedapiRunpagespeedSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PagespeedonlinePagespeedapiRunpagespeedRequest:
    query_params: PagespeedonlinePagespeedapiRunpagespeedQueryParams = field()
    security: PagespeedonlinePagespeedapiRunpagespeedSecurity = field()
    

@dataclass
class PagespeedonlinePagespeedapiRunpagespeedResponse:
    content_type: str = field()
    status_code: int = field()
    pagespeed_api_pagespeed_response_v5: Optional[shared.PagespeedAPIPagespeedResponseV5] = field(default=None)
    

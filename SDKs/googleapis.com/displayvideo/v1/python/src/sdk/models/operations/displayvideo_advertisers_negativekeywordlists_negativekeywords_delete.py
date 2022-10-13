from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeletePathParams:
    advertiser_id: str = field(default=None, metadata={'path_param': { 'field_name': 'advertiserId', 'style': 'simple', 'explode': False }})
    keyword_value: str = field(default=None, metadata={'path_param': { 'field_name': 'keywordValue', 'style': 'simple', 'explode': False }})
    negative_keyword_list_id: str = field(default=None, metadata={'path_param': { 'field_name': 'negativeKeywordListId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams:
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
class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest:
    path_params: DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeletePathParams = field(default=None)
    query_params: DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams = field(default=None)
    security: DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteSecurity = field(default=None)
    

@dataclass
class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    

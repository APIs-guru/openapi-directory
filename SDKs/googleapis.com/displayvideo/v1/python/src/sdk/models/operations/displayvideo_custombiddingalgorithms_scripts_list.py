from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DisplayvideoCustomBiddingAlgorithmsScriptsListPathParams:
    custom_bidding_algorithm_id: str = field(metadata={'path_param': { 'field_name': 'customBiddingAlgorithmId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    advertiser_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'advertiserId', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    partner_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'partnerId', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class DisplayvideoCustomBiddingAlgorithmsScriptsListSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DisplayvideoCustomBiddingAlgorithmsScriptsListRequest:
    path_params: DisplayvideoCustomBiddingAlgorithmsScriptsListPathParams = field()
    query_params: DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams = field()
    security: DisplayvideoCustomBiddingAlgorithmsScriptsListSecurity = field()
    

@dataclass
class DisplayvideoCustomBiddingAlgorithmsScriptsListResponse:
    content_type: str = field()
    status_code: int = field()
    list_custom_bidding_scripts_response: Optional[shared.ListCustomBiddingScriptsResponse] = field(default=None)
    

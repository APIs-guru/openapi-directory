from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class ContentOrderreturnsListPathParams:
    merchant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'merchantId', 'style': 'simple', 'explode': False }})
    
class ContentOrderreturnsListOrderByEnum(str, Enum):
    RETURN_CREATION_TIME_DESC = "RETURN_CREATION_TIME_DESC"
    RETURN_CREATION_TIME_ASC = "RETURN_CREATION_TIME_ASC"


@dataclass
class ContentOrderreturnsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    created_end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdEndDate', 'style': 'form', 'explode': True }})
    created_start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdStartDate', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[ContentOrderreturnsListOrderByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ContentOrderreturnsListSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ContentOrderreturnsListRequest:
    path_params: ContentOrderreturnsListPathParams = field(default=None)
    query_params: ContentOrderreturnsListQueryParams = field(default=None)
    security: ContentOrderreturnsListSecurity = field(default=None)
    

@dataclass
class ContentOrderreturnsListResponse:
    content_type: str = field(default=None)
    orderreturns_list_response: Optional[shared.OrderreturnsListResponse] = field(default=None)
    status_code: int = field(default=None)
    

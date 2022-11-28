from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class VaultMattersHoldsListPathParams:
    matter_id: str = field(metadata={'path_param': { 'field_name': 'matterId', 'style': 'simple', 'explode': False }})
    
class VaultMattersHoldsListViewEnum(str, Enum):
    HOLD_VIEW_UNSPECIFIED = "HOLD_VIEW_UNSPECIFIED"
    BASIC_HOLD = "BASIC_HOLD"
    FULL_HOLD = "FULL_HOLD"


@dataclass
class VaultMattersHoldsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    view: Optional[VaultMattersHoldsListViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class VaultMattersHoldsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class VaultMattersHoldsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class VaultMattersHoldsListSecurity:
    option1: Optional[VaultMattersHoldsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[VaultMattersHoldsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class VaultMattersHoldsListRequest:
    path_params: VaultMattersHoldsListPathParams = field()
    query_params: VaultMattersHoldsListQueryParams = field()
    security: VaultMattersHoldsListSecurity = field()
    

@dataclass
class VaultMattersHoldsListResponse:
    content_type: str = field()
    status_code: int = field()
    list_holds_response: Optional[shared.ListHoldsResponse] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class CloudchannelAccountsCustomersListPurchasableSkusPathParams:
    customer: str = field(default=None, metadata={'path_param': { 'field_name': 'customer', 'style': 'simple', 'explode': False }})
    
class CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum(str, Enum):
    CHANGE_TYPE_UNSPECIFIED = "CHANGE_TYPE_UNSPECIFIED"
    UPGRADE = "UPGRADE"
    DOWNGRADE = "DOWNGRADE"


@dataclass
class CloudchannelAccountsCustomersListPurchasableSkusQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    change_offer_purchase_change_type: Optional[CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'changeOfferPurchase.changeType', 'style': 'form', 'explode': True }})
    change_offer_purchase_entitlement: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'changeOfferPurchase.entitlement', 'style': 'form', 'explode': True }})
    create_entitlement_purchase_product: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createEntitlementPurchase.product', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    language_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'languageCode', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class CloudchannelAccountsCustomersListPurchasableSkusSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudchannelAccountsCustomersListPurchasableSkusRequest:
    path_params: CloudchannelAccountsCustomersListPurchasableSkusPathParams = field(default=None)
    query_params: CloudchannelAccountsCustomersListPurchasableSkusQueryParams = field(default=None)
    security: CloudchannelAccountsCustomersListPurchasableSkusSecurity = field(default=None)
    

@dataclass
class CloudchannelAccountsCustomersListPurchasableSkusResponse:
    content_type: str = field(default=None)
    google_cloud_channel_v1_list_purchasable_skus_response: Optional[shared.GoogleCloudChannelV1ListPurchasableSkusResponse] = field(default=None)
    status_code: int = field(default=None)
    

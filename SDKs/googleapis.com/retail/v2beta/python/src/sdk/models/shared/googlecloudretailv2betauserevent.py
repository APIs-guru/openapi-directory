from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaUserEvent:
    r"""GoogleCloudRetailV2betaUserEvent
    UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
    """
    
    attributes: Optional[dict[str, GoogleCloudRetailV2betaCustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    attribution_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributionToken') }})
    cart_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cartId') }})
    completion_detail: Optional[GoogleCloudRetailV2betaCompletionDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionDetail') }})
    event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTime') }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    experiment_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('experimentIds') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    order_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBy') }})
    page_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageCategories') }})
    page_view_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageViewId') }})
    product_details: Optional[List[GoogleCloudRetailV2betaProductDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productDetails') }})
    purchase_transaction: Optional[GoogleCloudRetailV2betaPurchaseTransaction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseTransaction') }})
    referrer_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referrerUri') }})
    search_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchQuery') }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionId') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user_info: Optional[GoogleCloudRetailV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfo') }})
    visitor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visitorId') }})
    

@dataclass_json
@dataclass
class GoogleCloudRetailV2betaUserEventInput:
    r"""GoogleCloudRetailV2betaUserEventInput
    UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
    """
    
    attributes: Optional[dict[str, GoogleCloudRetailV2betaCustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    attribution_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributionToken') }})
    cart_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cartId') }})
    completion_detail: Optional[GoogleCloudRetailV2betaCompletionDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionDetail') }})
    event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTime') }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    experiment_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('experimentIds') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    order_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBy') }})
    page_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageCategories') }})
    page_view_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageViewId') }})
    product_details: Optional[List[GoogleCloudRetailV2betaProductDetailInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productDetails') }})
    purchase_transaction: Optional[GoogleCloudRetailV2betaPurchaseTransaction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseTransaction') }})
    referrer_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referrerUri') }})
    search_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchQuery') }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionId') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user_info: Optional[GoogleCloudRetailV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfo') }})
    visitor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visitorId') }})
    

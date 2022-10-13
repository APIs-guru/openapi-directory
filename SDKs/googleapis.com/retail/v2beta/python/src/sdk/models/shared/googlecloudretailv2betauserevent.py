from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betacustomattribute
from . import googlecloudretailv2betacompletiondetail
from . import googlecloudretailv2betaproductdetail
from . import googlecloudretailv2betapurchasetransaction
from . import googlecloudretailv2betauserinfo


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaUserEvent:
    attributes: Optional[dict[str, googlecloudretailv2betacustomattribute.GoogleCloudRetailV2betaCustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    attribution_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributionToken' }})
    cart_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cartId' }})
    completion_detail: Optional[googlecloudretailv2betacompletiondetail.GoogleCloudRetailV2betaCompletionDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completionDetail' }})
    event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTime' }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    experiment_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'experimentIds' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    order_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderBy' }})
    page_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageCategories' }})
    page_view_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageViewId' }})
    product_details: Optional[List[googlecloudretailv2betaproductdetail.GoogleCloudRetailV2betaProductDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productDetails' }})
    purchase_transaction: Optional[googlecloudretailv2betapurchasetransaction.GoogleCloudRetailV2betaPurchaseTransaction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseTransaction' }})
    referrer_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referrerUri' }})
    search_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchQuery' }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionId' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    user_info: Optional[googlecloudretailv2betauserinfo.GoogleCloudRetailV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userInfo' }})
    visitor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visitorId' }})
    

from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec
from . import googlecloudpaymentsresellersubscriptionv1subscriptionlineitemonetimerecurrencedetails

class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum(str, Enum):
    LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED = "LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED"
    LINE_ITEM_RECURRENCE_TYPE_PERIODIC = "LINE_ITEM_RECURRENCE_TYPE_PERIODIC"
    LINE_ITEM_RECURRENCE_TYPE_ONE_TIME = "LINE_ITEM_RECURRENCE_TYPE_ONE_TIME"

class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum(str, Enum):
    LINE_ITEM_STATE_UNSPECIFIED = "LINE_ITEM_STATE_UNSPECIFIED"
    LINE_ITEM_STATE_ACTIVE = "LINE_ITEM_STATE_ACTIVE"
    LINE_ITEM_STATE_INACTIVE = "LINE_ITEM_STATE_INACTIVE"
    LINE_ITEM_STATE_NEW = "LINE_ITEM_STATE_NEW"
    LINE_ITEM_STATE_ACTIVATING = "LINE_ITEM_STATE_ACTIVATING"
    LINE_ITEM_STATE_DEACTIVATING = "LINE_ITEM_STATE_DEACTIVATING"


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    line_item_free_trial_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItemFreeTrialEndTime' }})
    line_item_promotion_specs: Optional[List[googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItemPromotionSpecs' }})
    one_time_recurrence_details: Optional[googlecloudpaymentsresellersubscriptionv1subscriptionlineitemonetimerecurrencedetails.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oneTimeRecurrenceDetails' }})
    product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    recurrence_type: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recurrenceType' }})
    state: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

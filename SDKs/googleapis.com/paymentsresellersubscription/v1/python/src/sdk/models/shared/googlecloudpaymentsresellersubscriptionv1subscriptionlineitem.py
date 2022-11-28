from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput:
    r"""GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput
    Individual line item definition of a subscription. Next id: 9
    """
    
    line_item_promotion_specs: Optional[List[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemPromotionSpecs') }})
    one_time_recurrence_details: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneTimeRecurrenceDetails') }})
    product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    

@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem:
    r"""GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem
    Individual line item definition of a subscription. Next id: 9
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    line_item_free_trial_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemFreeTrialEndTime') }})
    line_item_promotion_specs: Optional[List[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemPromotionSpecs') }})
    one_time_recurrence_details: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneTimeRecurrenceDetails') }})
    product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    recurrence_type: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurrenceType') }})
    state: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

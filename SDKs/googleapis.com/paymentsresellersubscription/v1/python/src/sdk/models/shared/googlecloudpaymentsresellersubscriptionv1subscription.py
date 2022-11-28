from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum(str, Enum):
    PROCESSING_STATE_UNSPECIFIED = "PROCESSING_STATE_UNSPECIFIED"
    PROCESSING_STATE_CANCELLING = "PROCESSING_STATE_CANCELLING"
    PROCESSING_STATE_RECURRING = "PROCESSING_STATE_RECURRING"

class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    STATE_CREATED = "STATE_CREATED"
    STATE_ACTIVE = "STATE_ACTIVE"
    STATE_CANCELLED = "STATE_CANCELLED"
    STATE_IN_GRACE_PERIOD = "STATE_IN_GRACE_PERIOD"
    STATE_CANCEL_AT_END_OF_CYCLE = "STATE_CANCEL_AT_END_OF_CYCLE"
    STATE_SUSPENDED = "STATE_SUSPENDED"


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1Subscription:
    r"""GoogleCloudPaymentsResellerSubscriptionV1Subscription
    A Subscription resource managed by 3P Partners.
    """
    
    cancellation_details: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancellationDetails') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    cycle_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycleEndTime') }})
    end_user_entitled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endUserEntitled') }})
    free_trial_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeTrialEndTime') }})
    line_items: Optional[List[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    partner_user_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerUserToken') }})
    processing_state: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingState') }})
    products: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    promotion_specs: Optional[List[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionSpecs') }})
    promotions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotions') }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectUri') }})
    renewal_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalTime') }})
    service_location: Optional[GoogleCloudPaymentsResellerSubscriptionV1Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceLocation') }})
    state: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    upgrade_downgrade_details: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeDowngradeDetails') }})
    

@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput:
    r"""GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput
    A Subscription resource managed by 3P Partners.
    """
    
    cancellation_details: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancellationDetails') }})
    line_items: Optional[List[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    partner_user_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerUserToken') }})
    products: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    promotion_specs: Optional[List[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionSpecs') }})
    promotions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotions') }})
    service_location: Optional[GoogleCloudPaymentsResellerSubscriptionV1Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceLocation') }})
    upgrade_downgrade_details: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeDowngradeDetails') }})
    

from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudpaymentsresellersubscriptionv1subscriptioncancellationdetails
from . import googlecloudpaymentsresellersubscriptionv1subscriptionlineitem
from . import googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec
from . import googlecloudpaymentsresellersubscriptionv1location
from . import googlecloudpaymentsresellersubscriptionv1subscriptionupgradedowngradedetails

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


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1Subscription:
    cancellation_details: Optional[googlecloudpaymentsresellersubscriptionv1subscriptioncancellationdetails.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancellationDetails' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    cycle_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cycleEndTime' }})
    end_user_entitled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endUserEntitled' }})
    free_trial_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeTrialEndTime' }})
    line_items: Optional[List[googlecloudpaymentsresellersubscriptionv1subscriptionlineitem.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItems' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    partner_user_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partnerUserToken' }})
    processing_state: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processingState' }})
    products: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    promotion_specs: Optional[List[googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionSpecs' }})
    promotions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotions' }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectUri' }})
    renewal_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renewalTime' }})
    service_location: Optional[googlecloudpaymentsresellersubscriptionv1location.GoogleCloudPaymentsResellerSubscriptionV1Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceLocation' }})
    state: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    upgrade_downgrade_details: Optional[googlecloudpaymentsresellersubscriptionv1subscriptionupgradedowngradedetails.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgradeDowngradeDetails' }})
    

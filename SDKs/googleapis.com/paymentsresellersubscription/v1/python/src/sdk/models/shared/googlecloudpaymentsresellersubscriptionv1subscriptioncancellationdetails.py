from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum(str, Enum):
    CANCELLATION_REASON_UNSPECIFIED = "CANCELLATION_REASON_UNSPECIFIED"
    CANCELLATION_REASON_FRAUD = "CANCELLATION_REASON_FRAUD"
    CANCELLATION_REASON_REMORSE = "CANCELLATION_REASON_REMORSE"
    CANCELLATION_REASON_ACCIDENTAL_PURCHASE = "CANCELLATION_REASON_ACCIDENTAL_PURCHASE"
    CANCELLATION_REASON_PAST_DUE = "CANCELLATION_REASON_PAST_DUE"
    CANCELLATION_REASON_ACCOUNT_CLOSED = "CANCELLATION_REASON_ACCOUNT_CLOSED"
    CANCELLATION_REASON_UPGRADE_DOWNGRADE = "CANCELLATION_REASON_UPGRADE_DOWNGRADE"
    CANCELLATION_REASON_USER_DELINQUENCY = "CANCELLATION_REASON_USER_DELINQUENCY"
    CANCELLATION_REASON_OTHER = "CANCELLATION_REASON_OTHER"


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails:
    r"""GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails
    Describes the details of a cancelled or cancelling subscription.
    """
    
    reason: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

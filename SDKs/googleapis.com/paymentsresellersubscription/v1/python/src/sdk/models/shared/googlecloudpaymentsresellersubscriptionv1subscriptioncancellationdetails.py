from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    reason: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    

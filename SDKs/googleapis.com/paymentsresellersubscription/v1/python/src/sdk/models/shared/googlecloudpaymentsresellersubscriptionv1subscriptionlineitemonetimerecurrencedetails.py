from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudpaymentsresellersubscriptionv1serviceperiod


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails:
    service_period: Optional[googlecloudpaymentsresellersubscriptionv1serviceperiod.GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servicePeriod' }})
    

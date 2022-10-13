from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlefirebasefcmdatav1beta1deliveryperformancepercents
from . import googlefirebasefcmdatav1beta1messageinsightpercents
from . import googlefirebasefcmdatav1beta1messageoutcomepercents


@dataclass_json
@dataclass
class GoogleFirebaseFcmDataV1beta1Data:
    count_messages_accepted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countMessagesAccepted' }})
    delivery_performance_percents: Optional[googlefirebasefcmdatav1beta1deliveryperformancepercents.GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryPerformancePercents' }})
    message_insight_percents: Optional[googlefirebasefcmdatav1beta1messageinsightpercents.GoogleFirebaseFcmDataV1beta1MessageInsightPercents] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageInsightPercents' }})
    message_outcome_percents: Optional[googlefirebasefcmdatav1beta1messageoutcomepercents.GoogleFirebaseFcmDataV1beta1MessageOutcomePercents] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageOutcomePercents' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleFirebaseFcmDataV1beta1Data:
    r"""GoogleFirebaseFcmDataV1beta1Data
    Data detailing messaging delivery
    """
    
    count_messages_accepted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countMessagesAccepted') }})
    delivery_performance_percents: Optional[GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryPerformancePercents') }})
    message_insight_percents: Optional[GoogleFirebaseFcmDataV1beta1MessageInsightPercents] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageInsightPercents') }})
    message_outcome_percents: Optional[GoogleFirebaseFcmDataV1beta1MessageOutcomePercents] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageOutcomePercents') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConsumerQuotaMetric:
    r"""ConsumerQuotaMetric
    Consumer quota settings for a quota metric.
    """
    
    consumer_quota_limits: Optional[List[ConsumerQuotaLimit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerQuotaLimits') }})
    descendant_consumer_quota_limits: Optional[List[ConsumerQuotaLimit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('descendantConsumerQuotaLimits') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    metric: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

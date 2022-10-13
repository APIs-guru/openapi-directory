from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import consumerquotalimit
from . import consumerquotalimit


@dataclass_json
@dataclass
class ConsumerQuotaMetric:
    consumer_quota_limits: Optional[List[consumerquotalimit.ConsumerQuotaLimit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerQuotaLimits' }})
    descendant_consumer_quota_limits: Optional[List[consumerquotalimit.ConsumerQuotaLimit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'descendantConsumerQuotaLimits' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    metric: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    

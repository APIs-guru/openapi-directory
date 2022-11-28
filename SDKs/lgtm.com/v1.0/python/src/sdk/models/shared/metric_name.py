from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MetricName:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    metric_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric-id') }})
    

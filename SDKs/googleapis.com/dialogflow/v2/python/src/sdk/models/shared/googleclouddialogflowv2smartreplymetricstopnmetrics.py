from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics:
    n: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'n' }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recall' }})
    

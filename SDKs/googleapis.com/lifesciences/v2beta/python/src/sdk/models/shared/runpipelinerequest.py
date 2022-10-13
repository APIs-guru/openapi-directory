from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pipeline


@dataclass_json
@dataclass
class RunPipelineRequest:
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    pipeline: Optional[pipeline.Pipeline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipeline' }})
    pub_sub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubSubTopic' }})
    

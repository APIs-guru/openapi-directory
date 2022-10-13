from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudrunv2tasktemplate


@dataclass_json
@dataclass
class GoogleCloudRunV2ExecutionTemplate:
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    parallelism: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parallelism' }})
    task_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskCount' }})
    template: Optional[googlecloudrunv2tasktemplate.GoogleCloudRunV2TaskTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    

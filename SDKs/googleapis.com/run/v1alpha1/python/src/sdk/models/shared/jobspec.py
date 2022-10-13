from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import instancetemplatespec


@dataclass_json
@dataclass
class JobSpec:
    active_deadline_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeDeadlineSeconds' }})
    backoff_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backoffLimit' }})
    completions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completions' }})
    parallelism: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parallelism' }})
    template: Optional[instancetemplatespec.InstanceTemplateSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    ttl_seconds_after_finished: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttlSecondsAfterFinished' }})
    

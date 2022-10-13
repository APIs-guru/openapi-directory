from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaNextTask:
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    task_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskConfigId' }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskId' }})
    

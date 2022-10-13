from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import addonsconfig


@dataclass_json
@dataclass
class SetAddonsConfigRequest:
    addons_config: Optional[addonsconfig.AddonsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addonsConfig' }})
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    

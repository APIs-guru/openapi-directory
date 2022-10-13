from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ManagedGroupConfig:
    instance_group_manager_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceGroupManagerName' }})
    instance_template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceTemplateName' }})
    

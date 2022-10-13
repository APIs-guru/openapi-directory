from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import projectconfig


@dataclass_json
@dataclass
class UpdateProjectConfigRequest:
    project_config: Optional[projectconfig.ProjectConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectConfig' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    

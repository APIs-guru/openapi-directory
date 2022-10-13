from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tenantprojectconfig


@dataclass_json
@dataclass
class AddTenantProjectRequest:
    project_config: Optional[tenantprojectconfig.TenantProjectConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectConfig' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    

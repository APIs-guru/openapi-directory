from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AttachTenantProjectRequest:
    external_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalResource' }})
    reserved_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservedResource' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    

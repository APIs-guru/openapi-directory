from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import role
from . import subject


@dataclass_json
@dataclass
class GoogleCloudSecuritycenterV1Binding:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ns' }})
    role: Optional[role.Role] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    subjects: Optional[List[subject.Subject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjects' }})
    

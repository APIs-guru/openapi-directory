from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assignmentgrouplabel
from . import assignmentostype


@dataclass_json
@dataclass
class Assignment:
    group_labels: Optional[List[assignmentgrouplabel.AssignmentGroupLabel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupLabels' }})
    instance_name_prefixes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceNamePrefixes' }})
    instances: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instances' }})
    os_types: Optional[List[assignmentostype.AssignmentOsType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osTypes' }})
    zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zones' }})
    

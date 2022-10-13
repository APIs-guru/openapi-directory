from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import patchinstancefiltergrouplabel


@dataclass_json
@dataclass
class PatchInstanceFilter:
    all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'all' }})
    group_labels: Optional[List[patchinstancefiltergrouplabel.PatchInstanceFilterGroupLabel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupLabels' }})
    instance_name_prefixes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceNamePrefixes' }})
    instances: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instances' }})
    zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zones' }})
    

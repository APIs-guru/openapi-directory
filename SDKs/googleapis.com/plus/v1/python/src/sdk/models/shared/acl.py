from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import plusaclentryresource


@dataclass_json
@dataclass
class ACL:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    items: Optional[List[plusaclentryresource.PlusAclentryResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    

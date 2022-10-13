from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import nestedrackgroup
from . import nestedsite


@dataclass_json
@dataclass
class PowerPanel:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    powerfeed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'powerfeed_count' }})
    rack_group: Optional[nestedrackgroup.NestedRackGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rack_group' }})
    site: nestedsite.NestedSite = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    

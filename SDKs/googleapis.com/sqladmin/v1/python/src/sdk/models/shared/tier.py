from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Tier:
    disk_quota: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DiskQuota' }})
    ram: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RAM' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    region: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    tier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier' }})
    

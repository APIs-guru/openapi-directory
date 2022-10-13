from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaGetDefaultBranchResponse:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    set_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setTime' }})
    

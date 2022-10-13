from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaSetDefaultBranchRequest:
    branch_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchId' }})
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'force' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LandlordCrmEntry:
    branch_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BranchID' }})
    global_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalReference' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    oid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OID' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MoveOrgMembershipRequest:
    customer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer' }})
    destination_org_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationOrgUnit' }})
    

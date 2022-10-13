from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import organization


@dataclass_json
@dataclass
class BillAction:
    classification: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classification' }})
    date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    order: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    organization: organization.Organization = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    

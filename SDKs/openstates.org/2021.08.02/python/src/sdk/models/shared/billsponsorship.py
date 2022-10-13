from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import organization
from . import compactperson


@dataclass_json
@dataclass
class BillSponsorship:
    classification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classification' }})
    entity_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    organization: Optional[organization.Organization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    person: Optional[compactperson.CompactPerson] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'person' }})
    primary: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    

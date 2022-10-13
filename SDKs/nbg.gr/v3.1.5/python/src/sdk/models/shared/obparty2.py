from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ObParty2:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    party_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartyId' }})
    

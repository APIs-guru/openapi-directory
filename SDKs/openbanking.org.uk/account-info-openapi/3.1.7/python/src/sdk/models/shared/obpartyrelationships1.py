from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ObPartyRelationships1Account:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    related: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Related' }})
    

@dataclass_json
@dataclass
class ObPartyRelationships1:
    account: Optional[ObPartyRelationships1Account] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Account' }})
    

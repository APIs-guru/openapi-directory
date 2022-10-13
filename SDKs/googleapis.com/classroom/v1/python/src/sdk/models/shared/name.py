from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Name:
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'familyName' }})
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullName' }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'givenName' }})
    

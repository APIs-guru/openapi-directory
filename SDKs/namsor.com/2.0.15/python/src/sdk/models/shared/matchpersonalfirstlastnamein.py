from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import firstlastnamein
from . import personalnamein


@dataclass_json
@dataclass
class MatchPersonalFirstLastNameIn:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name1: Optional[firstlastnamein.FirstLastNameIn] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name1' }})
    name2: Optional[personalnamein.PersonalNameIn] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name2' }})
    

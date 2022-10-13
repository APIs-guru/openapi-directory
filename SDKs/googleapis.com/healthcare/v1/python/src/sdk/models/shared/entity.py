from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Entity:
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityId' }})
    preferred_term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredTerm' }})
    vocabulary_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vocabularyCodes' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import phrase


@dataclass_json
@dataclass
class PhraseSet:
    boost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boost' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    phrases: Optional[List[phrase.Phrase]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phrases' }})
    

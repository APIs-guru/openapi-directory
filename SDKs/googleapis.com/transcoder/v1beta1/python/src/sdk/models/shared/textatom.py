from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import textinput


@dataclass_json
@dataclass
class TextAtom:
    inputs: Optional[List[textinput.TextInput]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputs' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    

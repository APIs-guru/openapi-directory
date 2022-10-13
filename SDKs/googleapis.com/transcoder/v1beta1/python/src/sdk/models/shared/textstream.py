from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import textatom


@dataclass_json
@dataclass
class TextStream:
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codec' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    mapping: Optional[List[textatom.TextAtom]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mapping' }})
    

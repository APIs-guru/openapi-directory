from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import hint


@dataclass_json
@dataclass
class AttestationNote:
    hint: Optional[hint.Hint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hint' }})
    

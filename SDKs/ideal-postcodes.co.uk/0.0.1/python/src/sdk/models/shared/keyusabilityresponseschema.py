from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import keyusabilityresult


@dataclass_json
@dataclass
class KeyUsabilityResponseSchema:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    result: Optional[keyusabilityresult.KeyUsabilityResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

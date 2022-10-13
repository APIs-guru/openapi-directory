from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Digest:
    algo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algo' }})
    digest_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'digestBytes' }})
    

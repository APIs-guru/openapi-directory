from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Digest:
    sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha256' }})
    sha384: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha384' }})
    sha512: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha512' }})
    

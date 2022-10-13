from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import hmackeymetadata


@dataclass_json
@dataclass
class HmacKey:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    metadata: Optional[hmackeymetadata.HmacKeyMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    

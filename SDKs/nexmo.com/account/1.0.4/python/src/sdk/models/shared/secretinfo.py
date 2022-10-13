from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import secretmgmtlinks


@dataclass_json
@dataclass
class SecretInfo:
    links: Optional[secretmgmtlinks.SecretMgmtLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

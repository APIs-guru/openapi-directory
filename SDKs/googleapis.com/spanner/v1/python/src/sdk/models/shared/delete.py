from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import keyset


@dataclass_json
@dataclass
class Delete:
    key_set: Optional[keyset.KeySet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keySet' }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table' }})
    

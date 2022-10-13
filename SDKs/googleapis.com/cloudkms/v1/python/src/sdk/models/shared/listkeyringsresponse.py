from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyring


@dataclass_json
@dataclass
class ListKeyRingsResponse:
    key_rings: Optional[List[keyring.KeyRing]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyRings' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    

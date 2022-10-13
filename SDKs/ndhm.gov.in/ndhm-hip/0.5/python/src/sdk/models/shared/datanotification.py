from dataclasses import dataclass, field
from typing import Any,List
from dataclasses_json import dataclass_json
from . import entrycontent
from . import entrylink
from . import keymaterial


@dataclass_json
@dataclass
class DataNotification:
    entries: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    key_material: keymaterial.KeyMaterial = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyMaterial' }})
    page_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageCount' }})
    page_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageNumber' }})
    transaction_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionId' }})
    

from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import billdocumentlink


@dataclass_json
@dataclass
class BillDocumentOrVersion:
    date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    links: List[billdocumentlink.BillDocumentLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    note: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    

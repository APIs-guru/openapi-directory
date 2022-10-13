from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import document


@dataclass_json
@dataclass
class BatchGetDocumentsResponse:
    found: Optional[document.Document] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'found' }})
    missing: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'missing' }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTime' }})
    transaction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    

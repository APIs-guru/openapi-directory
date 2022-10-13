from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import document


@dataclass_json
@dataclass
class RunQueryResponse:
    document: Optional[document.Document] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document' }})
    done: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'done' }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTime' }})
    skipped_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skippedResults' }})
    transaction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    

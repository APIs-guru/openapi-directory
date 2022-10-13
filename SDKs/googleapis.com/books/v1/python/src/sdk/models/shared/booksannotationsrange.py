from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BooksAnnotationsRange:
    end_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endOffset' }})
    end_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endPosition' }})
    start_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startOffset' }})
    start_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startPosition' }})
    

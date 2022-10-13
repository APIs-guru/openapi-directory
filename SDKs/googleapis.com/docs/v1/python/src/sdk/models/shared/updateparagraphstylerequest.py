from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import paragraphstyle
from . import range


@dataclass_json
@dataclass
class UpdateParagraphStyleRequest:
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    paragraph_style: Optional[paragraphstyle.ParagraphStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paragraphStyle' }})
    range: Optional[range.Range] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    

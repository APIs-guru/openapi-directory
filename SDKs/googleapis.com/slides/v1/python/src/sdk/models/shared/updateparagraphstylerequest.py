from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tablecelllocation
from . import paragraphstyle
from . import range


@dataclass_json
@dataclass
class UpdateParagraphStyleRequest:
    cell_location: Optional[tablecelllocation.TableCellLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cellLocation' }})
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    style: Optional[paragraphstyle.ParagraphStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'style' }})
    text_range: Optional[range.Range] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textRange' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tablecelllocation
from . import range


@dataclass_json
@dataclass
class DeleteParagraphBulletsRequest:
    cell_location: Optional[tablecelllocation.TableCellLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cellLocation' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    text_range: Optional[range.Range] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textRange' }})
    

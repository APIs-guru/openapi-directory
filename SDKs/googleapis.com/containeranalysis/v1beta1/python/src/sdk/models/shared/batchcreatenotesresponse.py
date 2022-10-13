from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import note


@dataclass_json
@dataclass
class BatchCreateNotesResponse:
    notes: Optional[List[note.Note]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    

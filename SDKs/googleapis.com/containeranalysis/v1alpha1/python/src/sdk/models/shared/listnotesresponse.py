from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import note


@dataclass_json
@dataclass
class ListNotesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    notes: Optional[List[note.Note]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    

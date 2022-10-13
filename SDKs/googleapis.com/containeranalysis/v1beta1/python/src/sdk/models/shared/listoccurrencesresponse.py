from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import occurrence


@dataclass_json
@dataclass
class ListOccurrencesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    occurrences: Optional[List[occurrence.Occurrence]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'occurrences' }})
    

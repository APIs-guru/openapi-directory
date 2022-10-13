from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import glossaryentry


@dataclass_json
@dataclass
class ListGlossaryEntriesResponse:
    glossary_entries: Optional[List[glossaryentry.GlossaryEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'glossaryEntries' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListGlossaryEntriesResponse:
    r"""ListGlossaryEntriesResponse
    Response message for ListGlossaryEntries
    """
    
    glossary_entries: Optional[List[GlossaryEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glossaryEntries') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

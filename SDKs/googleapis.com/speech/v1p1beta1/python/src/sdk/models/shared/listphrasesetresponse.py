from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import phraseset


@dataclass_json
@dataclass
class ListPhraseSetResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    phrase_sets: Optional[List[phraseset.PhraseSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phraseSets' }})
    

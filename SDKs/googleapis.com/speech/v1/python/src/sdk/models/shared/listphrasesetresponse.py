from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListPhraseSetResponse:
    r"""ListPhraseSetResponse
    Message returned to the client by the `ListPhraseSet` method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    phrase_sets: Optional[List[PhraseSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseSets') }})
    

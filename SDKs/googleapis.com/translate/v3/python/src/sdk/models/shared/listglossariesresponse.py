from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListGlossariesResponse:
    r"""ListGlossariesResponse
    Response message for ListGlossaries.
    """
    
    glossaries: Optional[List[Glossary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glossaries') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

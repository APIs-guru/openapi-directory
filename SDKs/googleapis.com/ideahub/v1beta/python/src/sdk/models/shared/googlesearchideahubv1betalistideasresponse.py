from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleSearchIdeahubV1betaListIdeasResponse:
    ideas: Optional[List[GoogleSearchIdeahubV1betaIdea]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ideas') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

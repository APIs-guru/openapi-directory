from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TypeaheadResponse:
    terms: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms') }})
    genres: Optional[List[Genre]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genres') }})
    podcasts: Optional[List[PodcastTypeaheadResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('podcasts') }})
    

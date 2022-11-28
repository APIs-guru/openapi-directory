from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryFilters:
    genres: Optional[List[NameGUIDPair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Genres') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

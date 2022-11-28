from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OpenAqProjectsResult:
    results: List[ProjectsRow] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    meta: Optional[Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

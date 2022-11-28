from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Analysis:
    commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit-id') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    languages: Optional[List[LanguageStats]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    log_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('log-url') }})
    project: Optional[Project] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    results_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results-url') }})
    

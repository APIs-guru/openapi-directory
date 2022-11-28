from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class QueryjobResultsOverviewEntryStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class QueryjobResultsOverviewEntry:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    external: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external') }})
    internal: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internal') }})
    project: Optional[Project] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    status: Optional[QueryjobResultsOverviewEntryStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

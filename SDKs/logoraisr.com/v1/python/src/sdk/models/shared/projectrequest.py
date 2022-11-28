from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProjectRequest:
    file_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_id') }})
    project_title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('project_title') }})
    process: Optional[Process] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('process') }})
    

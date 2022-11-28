from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PollingOptions:
    diagnostics: Optional[List[Diagnostic]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diagnostics') }})
    fail_condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failCondition') }})
    finish_condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finishCondition') }})
    polling_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pollingLink') }})
    target_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetLink') }})
    

from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SeqMapTask:
    r"""SeqMapTask
    Describes a particular function to invoke.
    """
    
    inputs: Optional[List[SideInputInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputs') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    output_infos: Optional[List[SeqMapTaskOutputInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputInfos') }})
    stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageName') }})
    system_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemName') }})
    user_fn: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userFn') }})
    

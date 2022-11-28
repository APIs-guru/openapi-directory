from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Stage:
    r"""Stage
    Stage specifies a location to which to deploy.
    """
    
    profiles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profiles') }})
    strategy: Optional[Strategy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strategy') }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetId') }})
    

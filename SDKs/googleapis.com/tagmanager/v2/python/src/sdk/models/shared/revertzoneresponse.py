from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RevertZoneResponse:
    r"""RevertZoneResponse
    The result of reverting a zone in a workspace.
    """
    
    zone: Optional[Zone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Destination:
    r"""Destination
    Represents a target of an invocation over HTTP.
    """
    
    cloud_run_service: Optional[CloudRunService] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudRunService') }})
    

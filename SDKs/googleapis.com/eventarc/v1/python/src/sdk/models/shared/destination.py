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
    
    cloud_function: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudFunction') }})
    cloud_run: Optional[CloudRun] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudRun') }})
    gke: Optional[Gke] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gke') }})
    workflow: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflow') }})
    

from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Canary:
    r"""Canary
    The configuration of the canary mode for a service descriptor
    """
    
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    root: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('root') }})
    targets: List[Target] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    traffic: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('traffic') }})
    

from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BadResponsesFaultConfig:
    r"""BadResponsesFaultConfig
    Config for bad requests injection fault
    """
    
    ratio: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratio') }})
    responses: List[BadResponse] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    

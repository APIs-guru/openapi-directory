from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CardDisplayBody:
    r"""CardDisplayBody
    Configuration for displayed info on a card
    """
    
    properties: List[CardDisplayProperty] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    

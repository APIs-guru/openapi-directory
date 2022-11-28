from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CardFetchBody:
    r"""CardFetchBody
    Configuration for this card's data fetch request.
    """
    
    object_types: List[CardObjectTypeBody] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTypes') }})
    target_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetUrl') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Card:
    r"""Card
    A card is a UI element that can contain UI widgets such as texts, images.
    """
    
    card_actions: Optional[List[CardAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardActions') }})
    header: Optional[CardHeader] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sections: Optional[List[Section]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sections') }})
    

from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CardCreateRequest:
    r"""CardCreateRequest
    State of card definition to be created
    """
    
    actions: CardActions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    display: CardDisplayBody = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display') }})
    fetch: CardFetchBody = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fetch') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

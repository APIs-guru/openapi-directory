from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CardActions:
    r"""CardActions
    Configuration for custom user actions on cards.
    """
    
    base_urls: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseUrls') }})
    

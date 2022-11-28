from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CardFetchBodyPatch:
    r"""CardFetchBodyPatch
    Variant of CardFetchBody with fields as optional for patches
    """
    
    object_types: List[CardObjectTypeBody] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTypes') }})
    target_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetUrl') }})
    

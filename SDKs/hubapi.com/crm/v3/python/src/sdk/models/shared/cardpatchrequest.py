from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CardPatchRequest:
    r"""CardPatchRequest
    Body for a patch with optional fields
    """
    
    actions: Optional[CardActions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    display: Optional[CardDisplayBody] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display') }})
    fetch: Optional[CardFetchBodyPatch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fetch') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

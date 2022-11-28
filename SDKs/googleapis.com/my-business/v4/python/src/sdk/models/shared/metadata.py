from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Metadata:
    r"""Metadata
    Additional non-user-editable information about the location.
    """
    
    duplicate: Optional[Duplicate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicate') }})
    maps_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapsUrl') }})
    new_review_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newReviewUrl') }})
    

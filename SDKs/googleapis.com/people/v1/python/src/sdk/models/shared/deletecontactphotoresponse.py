from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteContactPhotoResponse:
    r"""DeleteContactPhotoResponse
    The response for deleting a contact's photo.
    """
    
    person: Optional[Person] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContactToCreateInput:
    r"""ContactToCreateInput
    A wrapper that contains the person data to populate a newly created source.
    """
    
    contact_person: Optional[PersonInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactPerson') }})
    

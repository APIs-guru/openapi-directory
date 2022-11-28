from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateCustomClassRequest:
    r"""CreateCustomClassRequest
    Message sent by the client for the `CreateCustomClass` method.
    """
    
    custom_class: Optional[CustomClass] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customClass') }})
    custom_class_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customClassId') }})
    

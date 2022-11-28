from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModelState:
    r"""ModelState
    State common to all model types. Includes publishing and validation information.
    """
    
    published: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    validation_error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationError') }})
    

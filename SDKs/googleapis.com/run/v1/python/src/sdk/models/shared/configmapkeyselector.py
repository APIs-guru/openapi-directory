from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigMapKeySelector:
    r"""ConfigMapKeySelector
    Not supported by Cloud Run.
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    local_object_reference: Optional[LocalObjectReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localObjectReference') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    optional: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optional') }})
    

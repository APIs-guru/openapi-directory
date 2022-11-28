from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Extension:
    r"""Extension
    Version and identification for an Envoy extension. [#next-free-field: 6]
    """
    
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type_descriptor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeDescriptor') }})
    version: Optional[BuildVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

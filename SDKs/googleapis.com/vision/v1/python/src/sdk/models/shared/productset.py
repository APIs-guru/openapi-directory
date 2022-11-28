from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProductSetInput:
    r"""ProductSetInput
    A ProductSet contains Products. A ProductSet can contain a maximum of 1 million reference images. If the limit is exceeded, periodic indexing will fail.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    index_error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexError') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class ProductSet:
    r"""ProductSet
    A ProductSet contains Products. A ProductSet can contain a maximum of 1 million reference images. If the limit is exceeded, periodic indexing will fail.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    index_error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexError') }})
    index_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

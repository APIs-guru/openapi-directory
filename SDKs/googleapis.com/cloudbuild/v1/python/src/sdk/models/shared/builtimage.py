from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BuiltImage:
    r"""BuiltImage
    An image built by the pipeline.
    """
    
    digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digest') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    push_timing: Optional[TimeSpan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pushTiming') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Module:
    r"""Module
    Binary module.
    """
    
    build_id: Optional[TruncatableString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildId') }})
    module: Optional[TruncatableString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('module') }})
    

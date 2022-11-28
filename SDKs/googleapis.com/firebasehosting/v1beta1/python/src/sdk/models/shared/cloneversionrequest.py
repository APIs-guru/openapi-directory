from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CloneVersionRequest:
    exclude: Optional[PathFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclude') }})
    finalize: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalize') }})
    include: Optional[PathFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include') }})
    source_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceVersion') }})
    

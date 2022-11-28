from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Guaranteed:
    r"""Guaranteed
    Guaranteed tier definition.
    """
    
    min_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minDuration') }})
    reserved: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reserved') }})
    

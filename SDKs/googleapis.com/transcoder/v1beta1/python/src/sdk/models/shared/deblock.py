from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Deblock:
    r"""Deblock
    Deblock preprocessing configuration.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    strength: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strength') }})
    

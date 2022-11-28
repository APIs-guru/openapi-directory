from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Standard:
    r"""Standard
    Standard represents the standard deployment strategy.
    """
    
    verify: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verify') }})
    

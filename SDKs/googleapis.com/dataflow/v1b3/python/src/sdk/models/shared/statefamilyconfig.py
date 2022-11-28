from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StateFamilyConfig:
    r"""StateFamilyConfig
    State family configuration.
    """
    
    is_read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRead') }})
    state_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateFamily') }})
    

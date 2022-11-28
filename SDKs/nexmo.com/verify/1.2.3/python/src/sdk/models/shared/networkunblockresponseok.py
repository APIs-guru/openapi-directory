from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NetworkUnblockResponseOk:
    r"""NetworkUnblockResponseOk
    Success
    """
    
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    unblocked_until: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unblocked_until') }})
    

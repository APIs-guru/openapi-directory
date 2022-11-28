from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class InsuranceNetworkStateEnum(str, Enum):
    NETWORK_STATE_UNSPECIFIED = "NETWORK_STATE_UNSPECIFIED"
    ACCEPTED = "ACCEPTED"
    PENDING_ADD = "PENDING_ADD"
    PENDING_DELETE = "PENDING_DELETE"
    NOT_ACCEPTED = "NOT_ACCEPTED"


@dataclass_json
@dataclass
class InsuranceNetwork:
    r"""InsuranceNetwork
    A single insurance network. Next id: 5
    """
    
    network_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkId') }})
    network_names: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkNames') }})
    payer_names: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payerNames') }})
    state: Optional[InsuranceNetworkStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

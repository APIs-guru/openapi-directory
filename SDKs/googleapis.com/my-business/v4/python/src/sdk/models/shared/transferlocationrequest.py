from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TransferLocationRequest:
    r"""TransferLocationRequest
    Request message for Locations.TransferLocation.
    """
    
    to_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toAccount') }})
    

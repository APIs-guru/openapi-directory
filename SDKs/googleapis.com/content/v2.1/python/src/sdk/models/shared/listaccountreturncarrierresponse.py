from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAccountReturnCarrierResponse:
    r"""ListAccountReturnCarrierResponse
    Response for listing account return carriers.
    """
    
    account_return_carriers: Optional[List[AccountReturnCarrier]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountReturnCarriers') }})
    

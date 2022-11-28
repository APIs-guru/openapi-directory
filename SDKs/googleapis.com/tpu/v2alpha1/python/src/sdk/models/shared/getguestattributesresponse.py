from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetGuestAttributesResponse:
    r"""GetGuestAttributesResponse
    Response for GetGuestAttributes.
    """
    
    guest_attributes: Optional[List[GuestAttributes]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestAttributes') }})
    

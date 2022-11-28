from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleHomeEnterpriseSdmV1ListRoomsResponse:
    r"""GoogleHomeEnterpriseSdmV1ListRoomsResponse
    Response message for SmartDeviceManagementService.ListRooms
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    rooms: Optional[List[GoogleHomeEnterpriseSdmV1Room]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rooms') }})
    

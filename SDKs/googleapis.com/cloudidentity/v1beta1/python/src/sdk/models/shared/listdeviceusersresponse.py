from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDeviceUsersResponse:
    r"""ListDeviceUsersResponse
    Response message that is returned from the ListDeviceUsers method.
    """
    
    device_users: Optional[List[DeviceUser]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceUsers') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

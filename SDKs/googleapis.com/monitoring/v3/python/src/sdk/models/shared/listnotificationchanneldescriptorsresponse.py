from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListNotificationChannelDescriptorsResponse:
    r"""ListNotificationChannelDescriptorsResponse
    The ListNotificationChannelDescriptors response.
    """
    
    channel_descriptors: Optional[List[NotificationChannelDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelDescriptors') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

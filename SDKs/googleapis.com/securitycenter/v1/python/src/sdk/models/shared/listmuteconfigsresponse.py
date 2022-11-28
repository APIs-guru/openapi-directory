from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListMuteConfigsResponse:
    r"""ListMuteConfigsResponse
    Response message for listing mute configs.
    """
    
    mute_configs: Optional[List[GoogleCloudSecuritycenterV1MuteConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('muteConfigs') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

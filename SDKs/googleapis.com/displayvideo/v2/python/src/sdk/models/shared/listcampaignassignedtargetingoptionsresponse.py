from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCampaignAssignedTargetingOptionsResponse:
    r"""ListCampaignAssignedTargetingOptionsResponse
    Response message for ListCampaignAssignedTargetingOptions.
    """
    
    assigned_targeting_options: Optional[List[AssignedTargetingOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignedTargetingOptions') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

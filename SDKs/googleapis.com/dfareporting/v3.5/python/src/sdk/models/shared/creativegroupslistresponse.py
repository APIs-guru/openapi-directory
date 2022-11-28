from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreativeGroupsListResponse:
    r"""CreativeGroupsListResponse
    Creative Group List Response
    """
    
    creative_groups: Optional[List[CreativeGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeGroups') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

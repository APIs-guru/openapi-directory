from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2ListConstraintsResponse:
    r"""GoogleCloudOrgpolicyV2ListConstraintsResponse
    The response returned from the ListConstraints method.
    """
    
    constraints: Optional[List[GoogleCloudOrgpolicyV2Constraint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraints') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

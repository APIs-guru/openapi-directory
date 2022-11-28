from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2ListCustomConstraintsResponse:
    r"""GoogleCloudOrgpolicyV2ListCustomConstraintsResponse
    The response returned from the ListCustomConstraints method. It will be empty if no `CustomConstraints` are set on the organization resource.
    """
    
    custom_constraints: Optional[List[GoogleCloudOrgpolicyV2CustomConstraint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customConstraints') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

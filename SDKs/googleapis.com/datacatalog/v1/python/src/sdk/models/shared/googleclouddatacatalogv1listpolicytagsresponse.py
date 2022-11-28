from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1ListPolicyTagsResponse:
    r"""GoogleCloudDatacatalogV1ListPolicyTagsResponse
    Response message for ListPolicyTags.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    policy_tags: Optional[List[GoogleCloudDatacatalogV1PolicyTag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyTags') }})
    

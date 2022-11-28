from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse:
    r"""GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse
    The response to a `ListRelatedAccountGroups` call.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    related_account_groups: Optional[List[GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedAccountGroups') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse:
    r"""GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse
    The response to a `ListRelatedAccountGroupMemberships` call.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    related_account_group_memberships: Optional[List[GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedAccountGroupMemberships') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse:
    r"""GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse
    The response to a `SearchRelatedAccountGroupMemberships` call.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    related_account_group_memberships: Optional[List[GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedAccountGroupMemberships') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest:
    r"""GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest
    The request message to search related account group memberships.
    """
    
    hashed_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashedAccountId') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership:
    r"""GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership
    A membership in a group of related accounts.
    """
    
    hashed_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashedAccountId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

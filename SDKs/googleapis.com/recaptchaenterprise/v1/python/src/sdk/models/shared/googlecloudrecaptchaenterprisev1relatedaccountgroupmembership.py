from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership:
    hashed_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hashedAccountId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

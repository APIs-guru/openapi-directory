from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1Event:
    expected_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expectedAction' }})
    hashed_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hashedAccountId' }})
    site_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteKey' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    user_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAgent' }})
    user_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userIpAddress' }})
    

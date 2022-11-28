from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccountResponseProviderEnum(str, Enum):
    MESSENGER = "messenger"
    VIBER_SERVICE_MSG = "viber_service_msg"
    WHATSAPP = "whatsapp"


@dataclass_json
@dataclass
class AccountResponse:
    api_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_key') }})
    external_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_id') }})
    provider: AccountResponseProviderEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    applications: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applications') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

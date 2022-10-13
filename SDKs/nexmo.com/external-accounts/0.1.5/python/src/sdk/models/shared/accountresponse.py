from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class AccountResponseProviderEnum(str, Enum):
    MESSENGER = "messenger"
    VIBER_SERVICE_MSG = "viber_service_msg"
    WHATSAPP = "whatsapp"


@dataclass_json
@dataclass
class AccountResponse:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    api_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_key' }})
    applications: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applications' }})
    external_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    provider: AccountResponseProviderEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    

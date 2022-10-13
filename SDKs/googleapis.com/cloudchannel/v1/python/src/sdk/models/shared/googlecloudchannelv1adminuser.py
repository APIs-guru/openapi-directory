from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudChannelV1AdminUser:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'familyName' }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'givenName' }})
    

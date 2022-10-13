from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MetaCommunicationMediumEnum(str, Enum):
    MOBILE = "MOBILE"
    EMAIL = "EMAIL"


@dataclass_json
@dataclass
class Meta:
    communication_expiry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'communicationExpiry' }})
    communication_hint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'communicationHint' }})
    communication_medium: Optional[MetaCommunicationMediumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'communicationMedium' }})
    

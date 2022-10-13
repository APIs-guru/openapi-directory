from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class RedactTransactionProductEnum(str, Enum):
    SMS = "sms"
    VOICE = "voice"
    NUMBER_INSIGHT = "number-insight"
    VERIFY = "verify"
    VERIFY_SDK = "verify-sdk"
    MESSAGES = "messages"

class RedactTransactionTypeEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"


@dataclass_json
@dataclass
class RedactTransaction:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    product: RedactTransactionProductEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    type: RedactTransactionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

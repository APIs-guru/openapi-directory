from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    product: RedactTransactionProductEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    type: RedactTransactionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

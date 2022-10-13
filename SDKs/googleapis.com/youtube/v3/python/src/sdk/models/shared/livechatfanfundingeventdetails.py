from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LiveChatFanFundingEventDetails:
    amount_display_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amountDisplayString' }})
    amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amountMicros' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    user_comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userComment' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CheckResponse:
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    estimated_price_messages_sent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimated_price_messages_sent' }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_id' }})
    price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

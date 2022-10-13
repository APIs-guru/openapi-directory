from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class SearchResponseChecksStatusEnum(str, Enum):
    VALID = "VALID"
    INVALID = "INVALID"


@dataclass_json
@dataclass
class SearchResponseChecks:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    date_received: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_received' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_address' }})
    status: Optional[SearchResponseChecksStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
class SearchResponseEventsTypeEnum(str, Enum):
    TTS = "tts"
    SMS = "sms"


@dataclass_json
@dataclass
class SearchResponseEvents:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[SearchResponseEventsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class SearchResponseStatusEnum(str, Enum):
    IN_PROGRESS = "IN PROGRESS"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"
    EXPIRED = "EXPIRED"
    CANCELLED = "CANCELLED"


@dataclass_json
@dataclass
class SearchResponse:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    checks: Optional[List[SearchResponseChecks]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checks' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    date_finalized: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_finalized' }})
    date_submitted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_submitted' }})
    estimated_price_messages_sent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimated_price_messages_sent' }})
    events: Optional[List[SearchResponseEvents]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    first_event_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_event_date' }})
    last_event_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_event_date' }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    sender_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sender_id' }})
    status: Optional[SearchResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

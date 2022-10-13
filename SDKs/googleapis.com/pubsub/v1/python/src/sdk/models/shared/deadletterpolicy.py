from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeadLetterPolicy:
    dead_letter_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deadLetterTopic' }})
    max_delivery_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDeliveryAttempts' }})
    

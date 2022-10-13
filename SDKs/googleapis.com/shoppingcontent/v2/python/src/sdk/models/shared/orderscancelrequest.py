from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrdersCancelRequest:
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationId' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    reason_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonText' }})
    

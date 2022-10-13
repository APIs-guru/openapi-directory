from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CallbackCompletionBatchRequest:
    callback_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callbackId' }})
    output_fields: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputFields' }})
    

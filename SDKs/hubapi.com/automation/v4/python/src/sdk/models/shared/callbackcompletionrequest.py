from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CallbackCompletionRequest:
    output_fields: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputFields' }})
    

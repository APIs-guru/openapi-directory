from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import parameter


@dataclass_json
@dataclass
class StructuredMessage:
    message_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageKey' }})
    message_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageText' }})
    parameters: Optional[List[parameter.Parameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    

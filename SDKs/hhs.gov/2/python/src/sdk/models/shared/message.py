from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Message:
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    error_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDetail' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    user_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userMessage' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ContextRule:
    allowed_request_extensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedRequestExtensions' }})
    allowed_response_extensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedResponseExtensions' }})
    provided: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provided' }})
    requested: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requested' }})
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    

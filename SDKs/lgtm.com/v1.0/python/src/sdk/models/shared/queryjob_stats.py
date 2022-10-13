from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QueryjobStats:
    failed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failed' }})
    pending: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending' }})
    success_with_result: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success-with-result' }})
    success_without_result: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success-without-result' }})
    successful: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successful' }})
    

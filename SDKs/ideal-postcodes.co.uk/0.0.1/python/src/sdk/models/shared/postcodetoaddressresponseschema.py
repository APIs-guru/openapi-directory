from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import address


@dataclass_json
@dataclass
class PostcodeToAddressResponseSchema:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    result: Optional[List[address.Address]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

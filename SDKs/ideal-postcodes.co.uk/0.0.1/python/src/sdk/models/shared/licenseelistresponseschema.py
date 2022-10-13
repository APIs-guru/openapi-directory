from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import licenseelistresult


@dataclass_json
@dataclass
class LicenseeListResponseSchema:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    result: Optional[licenseelistresult.LicenseeListResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

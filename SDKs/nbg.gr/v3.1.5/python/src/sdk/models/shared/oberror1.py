from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import errorcode_enum


@dataclass_json
@dataclass
class ObError1:
    error_code: errorcode_enum.ErrorCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    

from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ErrorProtoLocationTypeEnum(str, Enum):
    PATH = "PATH"
    OTHER = "OTHER"
    PARAMETER = "PARAMETER"


@dataclass_json
@dataclass
class ErrorProto:
    argument: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'argument' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    debug_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debugInfo' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    external_error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalErrorMessage' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    location_type: Optional[ErrorProtoLocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationType' }})
    

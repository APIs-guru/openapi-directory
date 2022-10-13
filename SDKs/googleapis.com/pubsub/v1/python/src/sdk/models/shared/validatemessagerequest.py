from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import schema

class ValidateMessageRequestEncodingEnum(str, Enum):
    ENCODING_UNSPECIFIED = "ENCODING_UNSPECIFIED"
    JSON = "JSON"
    BINARY = "BINARY"


@dataclass_json
@dataclass
class ValidateMessageRequest:
    encoding: Optional[ValidateMessageRequestEncodingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encoding' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schema: Optional[schema.Schema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    

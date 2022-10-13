from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FailureInfoTypeEnum(str, Enum):
    FAILURE_TYPE_UNSPECIFIED = "FAILURE_TYPE_UNSPECIFIED"
    PUSH_FAILED = "PUSH_FAILED"
    PUSH_IMAGE_NOT_FOUND = "PUSH_IMAGE_NOT_FOUND"
    PUSH_NOT_AUTHORIZED = "PUSH_NOT_AUTHORIZED"
    LOGGING_FAILURE = "LOGGING_FAILURE"
    USER_BUILD_STEP = "USER_BUILD_STEP"
    FETCH_SOURCE_FAILED = "FETCH_SOURCE_FAILED"


@dataclass_json
@dataclass
class FailureInfo:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    type: Optional[FailureInfoTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

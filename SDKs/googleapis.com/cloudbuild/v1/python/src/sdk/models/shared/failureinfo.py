from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""FailureInfo
    A fatal problem encountered during the execution of the build.
    """
    
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    type: Optional[FailureInfoTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

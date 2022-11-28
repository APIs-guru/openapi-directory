from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ProcessingErrorCodeEnum(str, Enum):
    PROCESSING_ERROR_CODE_UNSPECIFIED = "PROCESSING_ERROR_CODE_UNSPECIFIED"
    MALFORMED_REQUEST = "MALFORMED_REQUEST"
    UNSUPPORTED_CONTENT_FORMAT = "UNSUPPORTED_CONTENT_FORMAT"
    INDIRECT_BROKEN_ACL = "INDIRECT_BROKEN_ACL"
    ACL_CYCLE = "ACL_CYCLE"


@dataclass_json
@dataclass
class ProcessingError:
    code: Optional[ProcessingErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    field_violations: Optional[List[FieldViolation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldViolations') }})
    

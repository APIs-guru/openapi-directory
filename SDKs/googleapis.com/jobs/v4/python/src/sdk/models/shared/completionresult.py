from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CompletionResultTypeEnum(str, Enum):
    COMPLETION_TYPE_UNSPECIFIED = "COMPLETION_TYPE_UNSPECIFIED"
    JOB_TITLE = "JOB_TITLE"
    COMPANY_NAME = "COMPANY_NAME"
    COMBINED = "COMBINED"


@dataclass_json
@dataclass
class CompletionResult:
    r"""CompletionResult
    Resource that represents completion results.
    """
    
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUri') }})
    suggestion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestion') }})
    type: Optional[CompletionResultTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

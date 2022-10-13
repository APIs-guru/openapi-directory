from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CompletionResultTypeEnum(str, Enum):
    COMPLETION_TYPE_UNSPECIFIED = "COMPLETION_TYPE_UNSPECIFIED"
    JOB_TITLE = "JOB_TITLE"
    COMPANY_NAME = "COMPANY_NAME"
    COMBINED = "COMBINED"


@dataclass_json
@dataclass
class CompletionResult:
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUri' }})
    suggestion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestion' }})
    type: Optional[CompletionResultTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

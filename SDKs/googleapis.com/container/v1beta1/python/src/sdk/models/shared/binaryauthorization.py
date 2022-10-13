from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class BinaryAuthorizationEvaluationModeEnum(str, Enum):
    EVALUATION_MODE_UNSPECIFIED = "EVALUATION_MODE_UNSPECIFIED"
    DISABLED = "DISABLED"
    PROJECT_SINGLETON_POLICY_ENFORCE = "PROJECT_SINGLETON_POLICY_ENFORCE"


@dataclass_json
@dataclass
class BinaryAuthorization:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    evaluation_mode: Optional[BinaryAuthorizationEvaluationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationMode' }})
    

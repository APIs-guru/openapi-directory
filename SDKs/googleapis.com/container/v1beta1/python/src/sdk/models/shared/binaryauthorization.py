from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BinaryAuthorizationEvaluationModeEnum(str, Enum):
    EVALUATION_MODE_UNSPECIFIED = "EVALUATION_MODE_UNSPECIFIED"
    DISABLED = "DISABLED"
    PROJECT_SINGLETON_POLICY_ENFORCE = "PROJECT_SINGLETON_POLICY_ENFORCE"


@dataclass_json
@dataclass
class BinaryAuthorization:
    r"""BinaryAuthorization
    Configuration for Binary Authorization.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    evaluation_mode: Optional[BinaryAuthorizationEvaluationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationMode') }})
    

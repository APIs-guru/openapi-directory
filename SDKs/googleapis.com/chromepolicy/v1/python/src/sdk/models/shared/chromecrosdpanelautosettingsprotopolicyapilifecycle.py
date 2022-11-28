from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ChromeCrosDpanelAutosettingsProtoPolicyAPILifecyclePolicyAPILifecycleStageEnum(str, Enum):
    API_UNSPECIFIED = "API_UNSPECIFIED"
    API_PREVIEW = "API_PREVIEW"
    API_DEVELOPMENT = "API_DEVELOPMENT"
    API_CURRENT = "API_CURRENT"
    API_DEPRECATED = "API_DEPRECATED"


@dataclass_json
@dataclass
class ChromeCrosDpanelAutosettingsProtoPolicyAPILifecycle:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    end_support: Optional[GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endSupport') }})
    policy_api_lifecycle_stage: Optional[ChromeCrosDpanelAutosettingsProtoPolicyAPILifecyclePolicyAPILifecycleStageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyApiLifecycleStage') }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MonitoringQueryLanguageConditionEvaluationMissingDataEnum(str, Enum):
    EVALUATION_MISSING_DATA_UNSPECIFIED = "EVALUATION_MISSING_DATA_UNSPECIFIED"
    EVALUATION_MISSING_DATA_INACTIVE = "EVALUATION_MISSING_DATA_INACTIVE"
    EVALUATION_MISSING_DATA_ACTIVE = "EVALUATION_MISSING_DATA_ACTIVE"
    EVALUATION_MISSING_DATA_NO_OP = "EVALUATION_MISSING_DATA_NO_OP"


@dataclass_json
@dataclass
class MonitoringQueryLanguageCondition:
    r"""MonitoringQueryLanguageCondition
    A condition type that allows alert policies to be defined using Monitoring Query Language (https://cloud.google.com/monitoring/mql).
    """
    
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    evaluation_missing_data: Optional[MonitoringQueryLanguageConditionEvaluationMissingDataEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationMissingData') }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    trigger: Optional[Trigger] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger') }})
    

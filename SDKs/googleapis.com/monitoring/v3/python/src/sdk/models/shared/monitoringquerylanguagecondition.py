from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import trigger

class MonitoringQueryLanguageConditionEvaluationMissingDataEnum(str, Enum):
    EVALUATION_MISSING_DATA_UNSPECIFIED = "EVALUATION_MISSING_DATA_UNSPECIFIED"
    EVALUATION_MISSING_DATA_INACTIVE = "EVALUATION_MISSING_DATA_INACTIVE"
    EVALUATION_MISSING_DATA_ACTIVE = "EVALUATION_MISSING_DATA_ACTIVE"
    EVALUATION_MISSING_DATA_NO_OP = "EVALUATION_MISSING_DATA_NO_OP"


@dataclass_json
@dataclass
class MonitoringQueryLanguageCondition:
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    evaluation_missing_data: Optional[MonitoringQueryLanguageConditionEvaluationMissingDataEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationMissingData' }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    trigger: Optional[trigger.Trigger] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trigger' }})
    

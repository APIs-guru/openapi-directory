from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprotoeventparameters


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoTriggerCriteria:
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    parameters: Optional[enterprisecrmeventbusprotoeventparameters.EnterpriseCrmEventbusProtoEventParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    trigger_criteria_task_implementation_class_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerCriteriaTaskImplementationClassName' }})
    

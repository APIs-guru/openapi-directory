from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprotocombinedcondition


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoNextTask:
    combined_conditions: Optional[List[enterprisecrmeventbusprotocombinedcondition.EnterpriseCrmEventbusProtoCombinedCondition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'combinedConditions' }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    task_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskConfigId' }})
    task_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskNumber' }})
    

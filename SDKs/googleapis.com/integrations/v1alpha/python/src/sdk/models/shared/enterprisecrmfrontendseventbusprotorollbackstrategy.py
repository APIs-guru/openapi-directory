from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmfrontendseventbusprotoeventparameters


@dataclass_json
@dataclass
class EnterpriseCrmFrontendsEventbusProtoRollbackStrategy:
    parameters: Optional[enterprisecrmfrontendseventbusprotoeventparameters.EnterpriseCrmFrontendsEventbusProtoEventParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    rollback_task_implementation_class_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rollbackTaskImplementationClassName' }})
    task_numbers_to_rollback: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskNumbersToRollback' }})
    

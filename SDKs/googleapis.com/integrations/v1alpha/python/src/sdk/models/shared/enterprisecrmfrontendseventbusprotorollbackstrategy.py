from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnterpriseCrmFrontendsEventbusProtoRollbackStrategy:
    r"""EnterpriseCrmFrontendsEventbusProtoRollbackStrategy
    Next available id: 4
    """
    
    parameters: Optional[EnterpriseCrmFrontendsEventbusProtoEventParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    rollback_task_implementation_class_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollbackTaskImplementationClassName') }})
    task_numbers_to_rollback: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskNumbersToRollback') }})
    

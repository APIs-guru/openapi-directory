from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprotonextteardowntask
from . import enterprisecrmeventbusprotoeventparameters
from . import enterprisecrmeventbusprotoeventbusproperties


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoTeardownTaskConfig:
    creator_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatorEmail' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    next_teardown_task: Optional[enterprisecrmeventbusprotonextteardowntask.EnterpriseCrmEventbusProtoNextTeardownTask] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextTeardownTask' }})
    parameters: Optional[enterprisecrmeventbusprotoeventparameters.EnterpriseCrmEventbusProtoEventParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    properties: Optional[enterprisecrmeventbusprotoeventbusproperties.EnterpriseCrmEventbusProtoEventBusProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    teardown_task_implementation_class_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teardownTaskImplementationClassName' }})
    

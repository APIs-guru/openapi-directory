from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmfrontendseventbusprotoworkflowparameterentry


@dataclass_json
@dataclass
class EnterpriseCrmFrontendsEventbusProtoWorkflowParameters:
    parameters: Optional[List[enterprisecrmfrontendseventbusprotoworkflowparameterentry.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    

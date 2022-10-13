from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmfrontendseventbusprotoparameterentry


@dataclass_json
@dataclass
class EnterpriseCrmFrontendsEventbusProtoEventParameters:
    parameters: Optional[List[enterprisecrmfrontendseventbusprotoparameterentry.EnterpriseCrmFrontendsEventbusProtoParameterEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    

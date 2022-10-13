from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmfrontendseventbusprotoparamspecentry


@dataclass_json
@dataclass
class EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage:
    parameters: Optional[List[enterprisecrmfrontendseventbusprotoparamspecentry.EnterpriseCrmFrontendsEventbusProtoParamSpecEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    

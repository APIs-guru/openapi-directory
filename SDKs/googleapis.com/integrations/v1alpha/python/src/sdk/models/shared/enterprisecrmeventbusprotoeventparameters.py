from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprotoparameterentry


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoEventParameters:
    parameters: Optional[List[enterprisecrmeventbusprotoparameterentry.EnterpriseCrmEventbusProtoParameterEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    

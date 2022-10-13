from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EnterpriseCrmFrontendsEventbusProtoProtoParameterArray:
    proto_values: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protoValues' }})
    

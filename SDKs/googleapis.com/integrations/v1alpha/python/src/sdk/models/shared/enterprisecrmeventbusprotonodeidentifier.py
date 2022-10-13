from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum(str, Enum):
    UNKNOWN_TYPE = "UNKNOWN_TYPE"
    TASK_CONFIG = "TASK_CONFIG"
    TRIGGER_CONFIG = "TRIGGER_CONFIG"


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoNodeIdentifier:
    element_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elementIdentifier' }})
    element_type: Optional[EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elementType' }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum(str, Enum):
    UNKNOWN_TYPE = "UNKNOWN_TYPE"
    TASK_CONFIG = "TASK_CONFIG"
    TRIGGER_CONFIG = "TRIGGER_CONFIG"


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoNodeIdentifier:
    r"""EnterpriseCrmEventbusProtoNodeIdentifier
    Represents a node identifier (type + id). Next highest id: 3
    """
    
    element_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elementIdentifier') }})
    element_type: Optional[EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elementType') }})
    

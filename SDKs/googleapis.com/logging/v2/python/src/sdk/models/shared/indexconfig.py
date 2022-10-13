from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class IndexConfigTypeEnum(str, Enum):
    INDEX_TYPE_UNSPECIFIED = "INDEX_TYPE_UNSPECIFIED"
    INDEX_TYPE_STRING = "INDEX_TYPE_STRING"
    INDEX_TYPE_INTEGER = "INDEX_TYPE_INTEGER"


@dataclass_json
@dataclass
class IndexConfig:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    field_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldPath' }})
    type: Optional[IndexConfigTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

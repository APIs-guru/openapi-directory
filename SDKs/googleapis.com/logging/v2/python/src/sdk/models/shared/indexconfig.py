from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class IndexConfigTypeEnum(str, Enum):
    INDEX_TYPE_UNSPECIFIED = "INDEX_TYPE_UNSPECIFIED"
    INDEX_TYPE_STRING = "INDEX_TYPE_STRING"
    INDEX_TYPE_INTEGER = "INDEX_TYPE_INTEGER"


@dataclass_json
@dataclass
class IndexConfigInput:
    r"""IndexConfigInput
    Configuration for an indexed field.
    """
    
    field_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldPath') }})
    type: Optional[IndexConfigTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class IndexConfig:
    r"""IndexConfig
    Configuration for an indexed field.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    field_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldPath') }})
    type: Optional[IndexConfigTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

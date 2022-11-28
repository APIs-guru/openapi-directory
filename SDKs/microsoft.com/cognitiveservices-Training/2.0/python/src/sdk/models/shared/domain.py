from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DomainTypeEnum(str, Enum):
    CLASSIFICATION = "Classification"
    OBJECT_DETECTION = "ObjectDetection"


@dataclass_json
@dataclass
class Domain:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    exportable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportable') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[DomainTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

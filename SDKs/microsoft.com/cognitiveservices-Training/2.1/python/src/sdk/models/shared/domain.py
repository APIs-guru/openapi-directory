from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DomainTypeEnum(str, Enum):
    CLASSIFICATION = "Classification"
    OBJECT_DETECTION = "ObjectDetection"


@dataclass_json
@dataclass
class Domain:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    exportable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportable' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[DomainTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

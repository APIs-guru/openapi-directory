from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import compositetypelabelentry
from . import operation
from . import templatecontents

class CompositeTypeStatusEnum(str, Enum):
    UNKNOWN_STATUS = "UNKNOWN_STATUS"
    DEPRECATED = "DEPRECATED"
    EXPERIMENTAL = "EXPERIMENTAL"
    SUPPORTED = "SUPPORTED"


@dataclass_json
@dataclass
class CompositeType:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    insert_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertTime' }})
    labels: Optional[List[compositetypelabelentry.CompositeTypeLabelEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operation: Optional[operation.Operation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    status: Optional[CompositeTypeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    template_contents: Optional[templatecontents.TemplateContents] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateContents' }})
    

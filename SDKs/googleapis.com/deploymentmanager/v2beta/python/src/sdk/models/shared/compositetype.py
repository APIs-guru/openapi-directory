from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CompositeTypeStatusEnum(str, Enum):
    UNKNOWN_STATUS = "UNKNOWN_STATUS"
    DEPRECATED = "DEPRECATED"
    EXPERIMENTAL = "EXPERIMENTAL"
    SUPPORTED = "SUPPORTED"


@dataclass_json
@dataclass
class CompositeType:
    r"""CompositeType
    Holds the composite type.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    insert_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertTime') }})
    labels: Optional[List[CompositeTypeLabelEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operation: Optional[Operation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    status: Optional[CompositeTypeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    template_contents: Optional[TemplateContents] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateContents') }})
    

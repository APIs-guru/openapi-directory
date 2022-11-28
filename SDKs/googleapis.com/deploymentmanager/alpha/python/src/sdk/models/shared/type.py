from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Type:
    r"""Type
    A resource type supported by Deployment Manager.
    """
    
    base: Optional[BaseType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    insert_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertTime') }})
    labels: Optional[List[TypeLabelEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operation: Optional[Operation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    

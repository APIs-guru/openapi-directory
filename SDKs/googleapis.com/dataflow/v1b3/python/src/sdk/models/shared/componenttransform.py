from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ComponentTransform:
    r"""ComponentTransform
    Description of a transform executed as part of an execution stage.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    original_transform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalTransform') }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    

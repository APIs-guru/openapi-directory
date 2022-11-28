from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TagBinding:
    r"""TagBinding
    A TagBinding represents a connection between a TagValue and a cloud resource Once a TagBinding is created, the TagValue is applied to all the descendants of the Google Cloud resource.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    tag_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagValue') }})
    

@dataclass_json
@dataclass
class TagBindingInput:
    r"""TagBindingInput
    A TagBinding represents a connection between a TagValue and a cloud resource Once a TagBinding is created, the TagValue is applied to all the descendants of the Google Cloud resource.
    """
    
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    tag_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagValue') }})
    

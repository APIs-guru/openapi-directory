from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SchemaGroup:
    r"""SchemaGroup
    An HL7v2 logical group construct.
    """
    
    choice: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('choice') }})
    max_occurs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxOccurs') }})
    members: Optional[List[GroupOrSegment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    min_occurs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minOccurs') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComposeRequestSourceObjectsObjectPreconditions:
    r"""ComposeRequestSourceObjectsObjectPreconditions
    Conditions that must be met for this operation to execute.
    """
    
    if_generation_match: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ifGenerationMatch') }})
    

@dataclass_json
@dataclass
class ComposeRequestSourceObjects:
    generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generation') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    object_preconditions: Optional[ComposeRequestSourceObjectsObjectPreconditions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectPreconditions') }})
    

@dataclass_json
@dataclass
class ComposeRequest:
    r"""ComposeRequest
    A Compose request.
    """
    
    destination: Optional[Object] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    source_objects: Optional[List[ComposeRequestSourceObjects]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceObjects') }})
    

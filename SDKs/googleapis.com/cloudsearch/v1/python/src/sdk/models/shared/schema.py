from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Schema:
    r"""Schema
    The schema definition for a data source.
    """
    
    object_definitions: Optional[List[ObjectDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectDefinitions') }})
    operation_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationIds') }})
    

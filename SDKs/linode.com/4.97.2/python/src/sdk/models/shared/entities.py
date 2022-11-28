from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Entities:
    r"""Entities
    A collection of the entities to include in this transfer request, separated by type.
    
    """
    
    linodes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linodes') }})
    

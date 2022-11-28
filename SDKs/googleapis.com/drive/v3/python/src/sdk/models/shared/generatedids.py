from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GeneratedIds:
    r"""GeneratedIds
    A list of generated file IDs which can be provided in create requests.
    """
    
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    space: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('space') }})
    

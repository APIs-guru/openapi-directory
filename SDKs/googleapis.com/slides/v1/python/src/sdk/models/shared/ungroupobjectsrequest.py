from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UngroupObjectsRequest:
    r"""UngroupObjectsRequest
    Ungroups objects, such as groups.
    """
    
    object_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectIds') }})
    

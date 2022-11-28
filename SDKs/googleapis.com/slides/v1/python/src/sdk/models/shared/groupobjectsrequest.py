from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GroupObjectsRequest:
    r"""GroupObjectsRequest
    Groups objects to create an object group. For example, groups PageElements to create a Group on the same page as all the children.
    """
    
    children_object_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childrenObjectIds') }})
    group_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupObjectId') }})
    

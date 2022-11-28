from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddDimensionGroupResponse:
    r"""AddDimensionGroupResponse
    The result of adding a group.
    """
    
    dimension_groups: Optional[List[DimensionGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionGroups') }})
    

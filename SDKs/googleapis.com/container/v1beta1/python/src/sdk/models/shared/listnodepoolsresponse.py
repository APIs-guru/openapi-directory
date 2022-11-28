from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListNodePoolsResponse:
    r"""ListNodePoolsResponse
    ListNodePoolsResponse is the result of ListNodePoolsRequest.
    """
    
    node_pools: Optional[List[NodePool]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePools') }})
    

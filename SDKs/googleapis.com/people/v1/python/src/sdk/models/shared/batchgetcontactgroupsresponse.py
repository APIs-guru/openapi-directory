from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetContactGroupsResponse:
    r"""BatchGetContactGroupsResponse
    The response to a batch get contact groups request.
    """
    
    responses: Optional[List[ContactGroupResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    

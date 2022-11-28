from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListOperationsResponse:
    r"""ListOperationsResponse
    ListOperationsResponse is the result of ListOperationsRequest.
    """
    
    missing_zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('missingZones') }})
    operations: Optional[List[Operation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    

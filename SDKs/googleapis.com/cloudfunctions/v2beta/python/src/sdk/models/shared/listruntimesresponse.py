from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListRuntimesResponse:
    r"""ListRuntimesResponse
    Response for the `ListRuntimes` method.
    """
    
    runtimes: Optional[List[Runtime]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimes') }})
    

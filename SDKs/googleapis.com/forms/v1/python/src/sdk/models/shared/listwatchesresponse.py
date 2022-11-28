from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListWatchesResponse:
    r"""ListWatchesResponse
    The response of a ListWatchesRequest.
    """
    
    watches: Optional[List[Watch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watches') }})
    

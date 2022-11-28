from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListConfigsResponse:
    r"""ListConfigsResponse
    `ListConfigs()` returns the following response. The order of returned objects is arbitrary; that is, it is not ordered in any particular way.
    """
    
    configs: Optional[List[RuntimeConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

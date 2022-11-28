from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListConsumerOverridesResponse:
    r"""ListConsumerOverridesResponse
    Response message for ListConsumerOverrides.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    overrides: Optional[List[QuotaOverride]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrides') }})
    

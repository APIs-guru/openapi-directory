from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAssetsResponse:
    r"""ListAssetsResponse
    ListAssets response.
    """
    
    assets: Optional[List[Asset]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    

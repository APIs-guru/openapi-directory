from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAssetsResponse:
    r"""ListAssetsResponse
    A response message from a request to list.
    """
    
    assets: Optional[List[Asset]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    

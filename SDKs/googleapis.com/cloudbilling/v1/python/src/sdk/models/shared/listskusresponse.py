from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSkusResponse:
    r"""ListSkusResponse
    Response message for `ListSkus`.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    skus: Optional[List[Sku]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skus') }})
    

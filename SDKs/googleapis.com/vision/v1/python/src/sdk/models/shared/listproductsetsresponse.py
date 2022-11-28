from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListProductSetsResponse:
    r"""ListProductSetsResponse
    Response message for the `ListProductSets` method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    product_sets: Optional[List[ProductSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productSets') }})
    

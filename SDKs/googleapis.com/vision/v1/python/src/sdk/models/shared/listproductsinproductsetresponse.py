from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListProductsInProductSetResponse:
    r"""ListProductsInProductSetResponse
    Response message for the `ListProductsInProductSet` method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    products: Optional[List[Product]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    

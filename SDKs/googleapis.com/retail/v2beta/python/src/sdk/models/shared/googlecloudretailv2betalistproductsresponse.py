from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaListProductsResponse:
    r"""GoogleCloudRetailV2betaListProductsResponse
    Response message for ProductService.ListProducts method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    products: Optional[List[GoogleCloudRetailV2betaProduct]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    

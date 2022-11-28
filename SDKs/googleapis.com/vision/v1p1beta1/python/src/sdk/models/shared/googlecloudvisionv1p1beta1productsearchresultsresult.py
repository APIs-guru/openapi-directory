from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1ProductSearchResultsResult:
    r"""GoogleCloudVisionV1p1beta1ProductSearchResultsResult
    Information about a product.
    """
    
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    product: Optional[GoogleCloudVisionV1p1beta1Product] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProductSearchParams:
    r"""ProductSearchParams
    Parameters for a product search request.
    """
    
    bounding_poly: Optional[BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPoly') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    product_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productCategories') }})
    product_set: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productSet') }})
    

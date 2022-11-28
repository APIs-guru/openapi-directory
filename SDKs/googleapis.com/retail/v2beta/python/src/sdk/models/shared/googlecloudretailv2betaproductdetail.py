from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaProductDetail:
    r"""GoogleCloudRetailV2betaProductDetail
    Detailed product information associated with a user event.
    """
    
    product: Optional[GoogleCloudRetailV2betaProduct] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    

@dataclass_json
@dataclass
class GoogleCloudRetailV2betaProductDetailInput:
    r"""GoogleCloudRetailV2betaProductDetailInput
    Detailed product information associated with a user event.
    """
    
    product: Optional[GoogleCloudRetailV2betaProductInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    

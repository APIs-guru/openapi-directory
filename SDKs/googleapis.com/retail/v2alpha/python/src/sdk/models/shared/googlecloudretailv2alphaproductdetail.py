from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaProductDetailInput:
    r"""GoogleCloudRetailV2alphaProductDetailInput
    Detailed product information associated with a user event.
    """
    
    product: Optional[GoogleCloudRetailV2alphaProductInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    

@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaProductDetail:
    r"""GoogleCloudRetailV2alphaProductDetail
    Detailed product information associated with a user event.
    """
    
    product: Optional[GoogleCloudRetailV2alphaProduct] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    

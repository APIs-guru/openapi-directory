from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2ProductDetailInput:
    r"""GoogleCloudRetailV2ProductDetailInput
    Detailed product information associated with a user event.
    """
    
    product: Optional[GoogleCloudRetailV2ProductInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    

@dataclass_json
@dataclass
class GoogleCloudRetailV2ProductDetail:
    r"""GoogleCloudRetailV2ProductDetail
    Detailed product information associated with a user event.
    """
    
    product: Optional[GoogleCloudRetailV2Product] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    

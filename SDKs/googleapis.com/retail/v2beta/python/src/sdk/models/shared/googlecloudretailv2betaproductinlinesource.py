from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaProductInlineSourceInput:
    r"""GoogleCloudRetailV2betaProductInlineSourceInput
    The inline source for the input config for ImportProducts method.
    """
    
    products: Optional[List[GoogleCloudRetailV2betaProductInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    

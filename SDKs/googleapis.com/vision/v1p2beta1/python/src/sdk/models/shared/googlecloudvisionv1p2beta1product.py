from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1Product:
    r"""GoogleCloudVisionV1p2beta1Product
    A Product contains ReferenceImages.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    product_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productCategory') }})
    product_labels: Optional[List[GoogleCloudVisionV1p2beta1ProductKeyValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productLabels') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2AddCatalogAttributeRequestInput:
    r"""GoogleCloudRetailV2AddCatalogAttributeRequestInput
    Request for CatalogService.AddCatalogAttribute method.
    """
    
    catalog_attribute: Optional[GoogleCloudRetailV2CatalogAttributeInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogAttribute') }})
    

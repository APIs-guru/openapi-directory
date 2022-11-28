from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PurgeProductsRequest:
    r"""PurgeProductsRequest
    Request message for the `PurgeProducts` method.
    """
    
    delete_orphan_products: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteOrphanProducts') }})
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force') }})
    product_set_purge_config: Optional[ProductSetPurgeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productSetPurgeConfig') }})
    

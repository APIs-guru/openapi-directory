from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import productsetpurgeconfig


@dataclass_json
@dataclass
class PurgeProductsRequest:
    delete_orphan_products: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteOrphanProducts' }})
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'force' }})
    product_set_purge_config: Optional[productsetpurgeconfig.ProductSetPurgeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productSetPurgeConfig' }})
    

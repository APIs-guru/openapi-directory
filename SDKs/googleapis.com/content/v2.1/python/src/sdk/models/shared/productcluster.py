from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProductClusterBrandInventoryStatusEnum(str, Enum):
    INVENTORY_STATUS_UNSPECIFIED = "INVENTORY_STATUS_UNSPECIFIED"
    IN_STOCK = "IN_STOCK"
    OUT_OF_STOCK = "OUT_OF_STOCK"
    NOT_IN_INVENTORY = "NOT_IN_INVENTORY"

class ProductClusterInventoryStatusEnum(str, Enum):
    INVENTORY_STATUS_UNSPECIFIED = "INVENTORY_STATUS_UNSPECIFIED"
    IN_STOCK = "IN_STOCK"
    OUT_OF_STOCK = "OUT_OF_STOCK"
    NOT_IN_INVENTORY = "NOT_IN_INVENTORY"


@dataclass_json
@dataclass
class ProductCluster:
    r"""ProductCluster
    Product cluster fields. A product cluster is a grouping for different offers that represent the same product. Values are only set for fields requested explicitly in the request's search query.
    """
    
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand') }})
    brand_inventory_status: Optional[ProductClusterBrandInventoryStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandInventoryStatus') }})
    category_l1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryL1') }})
    category_l2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryL2') }})
    category_l3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryL3') }})
    category_l4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryL4') }})
    category_l5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryL5') }})
    inventory_status: Optional[ProductClusterInventoryStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryStatus') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    variant_gtins: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variantGtins') }})
    

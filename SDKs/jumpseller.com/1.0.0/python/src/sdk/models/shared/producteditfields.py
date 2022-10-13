from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import categoryfields

class ProductEditFieldsPackageFormatEnum(str, Enum):
    BOX = "box"
    CYLINDER = "cylinder"

class ProductEditFieldsStatusEnum(str, Enum):
    AVAILABLE = "available"
    NOT_AVAILABLE = "not-available"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class ProductEditFields:
    barcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'barcode' }})
    categories: Optional[List[categoryfields.CategoryFields]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    diameter: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diameter' }})
    featured: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featured' }})
    google_product_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'google_product_category' }})
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    length: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'length' }})
    meta_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta_description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    package_format: Optional[ProductEditFieldsPackageFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'package_format' }})
    page_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_title' }})
    permalink: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permalink' }})
    price: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    shipping_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping_required' }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    status: Optional[ProductEditFieldsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    stock: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stock' }})
    stock_unlimited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stock_unlimited' }})
    weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    

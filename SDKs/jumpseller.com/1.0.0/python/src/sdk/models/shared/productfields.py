from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ProductFieldsPackageFormatEnum(str, Enum):
    BOX = "box"
    CYLINDER = "cylinder"

class ProductFieldsStatusEnum(str, Enum):
    AVAILABLE = "available"
    NOT_AVAILABLE = "not-available"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class ProductFields:
    barcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barcode') }})
    categories: Optional[List[CategoryFields]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    diameter: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diameter') }})
    discount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount') }})
    featured: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featured') }})
    google_product_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('google_product_category') }})
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    images: Optional[List[ImageFields]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    length: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    package_format: Optional[ProductFieldsPackageFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package_format') }})
    permalink: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permalink') }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    status: Optional[ProductFieldsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    stock: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stock') }})
    stock_unlimited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stock_unlimited') }})
    variants: Optional[List[VariantFields]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variants') }})
    weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

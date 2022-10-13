from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import boundingpoly


@dataclass_json
@dataclass
class ProductSearchParams:
    bounding_poly: Optional[boundingpoly.BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingPoly' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    product_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCategories' }})
    product_set: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productSet' }})
    

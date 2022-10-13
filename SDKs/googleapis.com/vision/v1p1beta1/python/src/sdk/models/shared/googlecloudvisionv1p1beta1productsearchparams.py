from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p1beta1boundingpoly


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1ProductSearchParams:
    bounding_poly: Optional[googlecloudvisionv1p1beta1boundingpoly.GoogleCloudVisionV1p1beta1BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingPoly' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    product_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCategories' }})
    product_set: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productSet' }})
    

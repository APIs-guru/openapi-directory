from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p1beta1product


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1ProductSearchResultsResult:
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    product: Optional[googlecloudvisionv1p1beta1product.GoogleCloudVisionV1p1beta1Product] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    

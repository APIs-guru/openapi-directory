from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betaproduct


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaProductDetail:
    product: Optional[googlecloudretailv2betaproduct.GoogleCloudRetailV2betaProduct] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    

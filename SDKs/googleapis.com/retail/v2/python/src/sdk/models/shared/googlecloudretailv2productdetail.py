from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2product


@dataclass_json
@dataclass
class GoogleCloudRetailV2ProductDetail:
    product: Optional[googlecloudretailv2product.GoogleCloudRetailV2Product] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    

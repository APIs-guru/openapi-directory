from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphaproduct


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaProductDetail:
    product: Optional[googlecloudretailv2alphaproduct.GoogleCloudRetailV2alphaProduct] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betaproduct


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaProductInlineSource:
    products: Optional[List[googlecloudretailv2betaproduct.GoogleCloudRetailV2betaProduct]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    

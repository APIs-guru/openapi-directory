from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphaproduct


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaProductInlineSource:
    products: Optional[List[googlecloudretailv2alphaproduct.GoogleCloudRetailV2alphaProduct]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2product


@dataclass_json
@dataclass
class GoogleCloudRetailV2ListProductsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    products: Optional[List[googlecloudretailv2product.GoogleCloudRetailV2Product]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    

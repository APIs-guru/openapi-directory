from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1product


@dataclass_json
@dataclass
class GoogleCloudChannelV1ListProductsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    products: Optional[List[googlecloudchannelv1product.GoogleCloudChannelV1Product]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    

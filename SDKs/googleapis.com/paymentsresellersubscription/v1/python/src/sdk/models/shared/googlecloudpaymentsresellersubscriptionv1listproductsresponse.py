from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudpaymentsresellersubscriptionv1product


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    products: Optional[List[googlecloudpaymentsresellersubscriptionv1product.GoogleCloudPaymentsResellerSubscriptionV1Product]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    

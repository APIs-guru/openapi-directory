from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1purchasablesku


@dataclass_json
@dataclass
class GoogleCloudChannelV1ListPurchasableSkusResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    purchasable_skus: Optional[List[googlecloudchannelv1purchasablesku.GoogleCloudChannelV1PurchasableSku]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchasableSkus' }})
    

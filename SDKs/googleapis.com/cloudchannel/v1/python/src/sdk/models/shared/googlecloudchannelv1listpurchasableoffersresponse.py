from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1purchasableoffer


@dataclass_json
@dataclass
class GoogleCloudChannelV1ListPurchasableOffersResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    purchasable_offers: Optional[List[googlecloudchannelv1purchasableoffer.GoogleCloudChannelV1PurchasableOffer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchasableOffers' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1transferableoffer


@dataclass_json
@dataclass
class GoogleCloudChannelV1ListTransferableOffersResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    transferable_offers: Optional[List[googlecloudchannelv1transferableoffer.GoogleCloudChannelV1TransferableOffer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferableOffers' }})
    

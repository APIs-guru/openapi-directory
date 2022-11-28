from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1ListPurchasableOffersResponse:
    r"""GoogleCloudChannelV1ListPurchasableOffersResponse
    Response message for ListPurchasableOffers.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    purchasable_offers: Optional[List[GoogleCloudChannelV1PurchasableOffer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchasableOffers') }})
    

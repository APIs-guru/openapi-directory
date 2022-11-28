from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1PurchasableOffer:
    r"""GoogleCloudChannelV1PurchasableOffer
    Offer that you can purchase for a customer. This is used in the ListPurchasableOffer API response.
    """
    
    offer: Optional[GoogleCloudChannelV1Offer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offer') }})
    

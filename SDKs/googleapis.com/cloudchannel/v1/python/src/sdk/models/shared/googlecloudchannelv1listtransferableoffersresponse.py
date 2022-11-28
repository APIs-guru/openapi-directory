from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1ListTransferableOffersResponse:
    r"""GoogleCloudChannelV1ListTransferableOffersResponse
    Response message for CloudChannelService.ListTransferableOffers.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    transferable_offers: Optional[List[GoogleCloudChannelV1TransferableOffer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferableOffers') }})
    

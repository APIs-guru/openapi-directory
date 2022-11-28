from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1ListOffersResponse:
    r"""GoogleCloudChannelV1ListOffersResponse
    Response message for ListOffers.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    offers: Optional[List[GoogleCloudChannelV1Offer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offers') }})
    

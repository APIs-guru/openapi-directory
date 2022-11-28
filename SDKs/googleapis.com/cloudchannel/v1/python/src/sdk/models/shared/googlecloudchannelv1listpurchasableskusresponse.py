from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1ListPurchasableSkusResponse:
    r"""GoogleCloudChannelV1ListPurchasableSkusResponse
    Response message for ListPurchasableSkus.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    purchasable_skus: Optional[List[GoogleCloudChannelV1PurchasableSku]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchasableSkus') }})
    

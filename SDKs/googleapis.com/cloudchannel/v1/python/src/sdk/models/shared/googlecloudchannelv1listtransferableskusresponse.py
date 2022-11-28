from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1ListTransferableSkusResponse:
    r"""GoogleCloudChannelV1ListTransferableSkusResponse
    Response message for CloudChannelService.ListTransferableSkus.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    transferable_skus: Optional[List[GoogleCloudChannelV1TransferableSku]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferableSkus') }})
    

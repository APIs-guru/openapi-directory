from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1ChangeOfferRequestInput:
    r"""GoogleCloudChannelV1ChangeOfferRequestInput
    Request message for CloudChannelService.ChangeOffer.
    """
    
    offer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offer') }})
    parameters: Optional[List[GoogleCloudChannelV1ParameterInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    purchase_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseOrderId') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1TransferableOffer:
    r"""GoogleCloudChannelV1TransferableOffer
    TransferableOffer represents an Offer that can be used in Transfer. Read-only.
    """
    
    offer: Optional[GoogleCloudChannelV1Offer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offer') }})
    

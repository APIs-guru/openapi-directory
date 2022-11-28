from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1TransferableSku:
    r"""GoogleCloudChannelV1TransferableSku
    TransferableSku represents information a reseller needs to view existing provisioned services for a customer that they do not own. Read-only.
    """
    
    legacy_sku: Optional[GoogleCloudChannelV1Sku] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacySku') }})
    sku: Optional[GoogleCloudChannelV1Sku] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    transfer_eligibility: Optional[GoogleCloudChannelV1TransferEligibility] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferEligibility') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ShippingsettingsCustomBatchRequestEntry:
    r"""ShippingsettingsCustomBatchRequestEntry
    A batch entry encoding a single non-batch shippingsettings request.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    shipping_settings: Optional[ShippingSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingSettings') }})
    

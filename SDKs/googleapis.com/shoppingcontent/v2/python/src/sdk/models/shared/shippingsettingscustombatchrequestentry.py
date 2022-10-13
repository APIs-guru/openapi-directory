from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import shippingsettings


@dataclass_json
@dataclass
class ShippingsettingsCustomBatchRequestEntry:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    shipping_settings: Optional[shippingsettings.ShippingSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingSettings' }})
    

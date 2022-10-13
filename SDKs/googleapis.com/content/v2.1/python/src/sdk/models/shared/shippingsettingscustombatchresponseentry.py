from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errors
from . import shippingsettings


@dataclass_json
@dataclass
class ShippingsettingsCustomBatchResponseEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    errors: Optional[errors.Errors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    shipping_settings: Optional[shippingsettings.ShippingSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingSettings' }})
    

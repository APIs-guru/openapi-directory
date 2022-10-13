from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CloudNetworkServiceRequestPartial:
    billing_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_account' }})
    capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacity' }})
    cloud_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloud_key' }})
    consuming_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consuming_account' }})
    contract_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contract_ref' }})
    external_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_ref' }})
    managing_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managing_account' }})
    product_offering: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_offering' }})
    purchase_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchase_order' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

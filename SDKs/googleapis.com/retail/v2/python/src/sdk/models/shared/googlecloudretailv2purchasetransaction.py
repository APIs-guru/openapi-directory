from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRetailV2PurchaseTransaction:
    cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cost' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    revenue: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revenue' }})
    tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax' }})
    

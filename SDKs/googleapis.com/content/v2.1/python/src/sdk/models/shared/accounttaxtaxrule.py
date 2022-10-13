from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountTaxTaxRule:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    rate_percent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ratePercent' }})
    shipping_taxed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingTaxed' }})
    use_global_rate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useGlobalRate' }})
    

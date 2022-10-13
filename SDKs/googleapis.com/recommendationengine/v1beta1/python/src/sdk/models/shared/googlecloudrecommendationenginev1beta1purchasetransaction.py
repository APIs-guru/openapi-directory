from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1PurchaseTransaction:
    costs: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costs' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    revenue: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revenue' }})
    taxes: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxes' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1PurchaseTransaction:
    r"""GoogleCloudRecommendationengineV1beta1PurchaseTransaction
    A transaction represents the entire purchase transaction.
    """
    
    costs: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costs') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    revenue: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revenue') }})
    taxes: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxes') }})
    

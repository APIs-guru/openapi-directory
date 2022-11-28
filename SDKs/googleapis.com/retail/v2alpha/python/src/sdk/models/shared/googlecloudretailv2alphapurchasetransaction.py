from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaPurchaseTransaction:
    r"""GoogleCloudRetailV2alphaPurchaseTransaction
    A transaction represents the entire purchase transaction.
    """
    
    cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    revenue: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revenue') }})
    tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax') }})
    

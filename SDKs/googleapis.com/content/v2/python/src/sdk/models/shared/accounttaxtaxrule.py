from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccountTaxTaxRule:
    r"""AccountTaxTaxRule
    Tax calculation rule to apply in a state or province (USA only).
    """
    
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    rate_percent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratePercent') }})
    shipping_taxed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingTaxed') }})
    use_global_rate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useGlobalRate') }})
    

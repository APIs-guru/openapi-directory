from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RepricingRuleCostOfGoodsSaleRule:
    r"""RepricingRuleCostOfGoodsSaleRule
    A repricing rule that changes the sale price based on cost of goods sale.
    """
    
    percentage_delta: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentageDelta') }})
    price_delta: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceDelta') }})
    

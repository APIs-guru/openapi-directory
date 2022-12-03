from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class QuotePriceV1:
    r"""QuotePriceV1
    These prices describe the costs associated with a quote.
    """
    
    premium_before_taxes_and_fees: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('premium_before_taxes_and_fees') }})
    

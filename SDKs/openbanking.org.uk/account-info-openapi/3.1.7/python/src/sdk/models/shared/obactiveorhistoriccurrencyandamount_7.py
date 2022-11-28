from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObActiveOrHistoricCurrencyAndAmount7:
    r"""ObActiveOrHistoricCurrencyAndAmount7
    Amount of money associated with the statement interest amount type.
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

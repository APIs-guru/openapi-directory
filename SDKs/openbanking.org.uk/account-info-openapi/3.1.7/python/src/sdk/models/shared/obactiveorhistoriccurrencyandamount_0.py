from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObActiveOrHistoricCurrencyAndAmount0:
    r"""ObActiveOrHistoricCurrencyAndAmount0
    The amount of the most recent direct debit collection.
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

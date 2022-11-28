from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreditCard:
    r"""CreditCard
    An object representing the credit card information you have on file with
    Linode to make Payments against your Account.
    
    """
    
    card_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('card_number') }})
    cvv: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cvv') }})
    expiry_month: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry_month') }})
    expiry_year: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry_year') }})
    

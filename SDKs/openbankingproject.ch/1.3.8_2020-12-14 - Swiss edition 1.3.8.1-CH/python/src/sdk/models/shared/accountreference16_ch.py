from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccountReference16Ch:
    r"""AccountReference16Ch
    Reference to an account by either
      * IBAN, of a payment accounts, or
      * otherAccountIdentification, for payment accounts if there is no IBAN
    adapted from ISO pain.001.001.03.ch.02 CashAccount16-CH_IdTpCcy
    
    """
    
    cash_account_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cashAccountType') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    iban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iban') }})
    other_account_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherAccountIdentification') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AccountDetailsUsageEnum(str, Enum):
    PRIV = "PRIV"
    ORGA = "ORGA"


@dataclass_json
@dataclass
class AccountDetails:
    r"""AccountDetails
    The ASPSP shall give at least one of the account reference identifiers:
      - iban
      - bban
      - pan
      - maskedPan
      - msisdn
    If the account is a multicurrency account currency code in \"currency\" is set to \"XXX\".
    
    """
    
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    links: Optional[dict[str, HrefType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    balances: Optional[List[Balance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balances') }})
    bban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bban') }})
    bic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bic') }})
    cash_account_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cashAccountType') }})
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    iban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iban') }})
    linked_accounts: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedAccounts') }})
    msisdn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('msisdn') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerName') }})
    product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceId') }})
    status: Optional[AccountStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    usage: Optional[AccountDetailsUsageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage') }})
    

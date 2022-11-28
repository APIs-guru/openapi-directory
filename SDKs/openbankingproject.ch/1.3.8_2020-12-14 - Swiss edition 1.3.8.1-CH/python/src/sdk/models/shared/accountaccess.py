from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AccountAccessAllPsd2Enum(str, Enum):
    ALL_ACCOUNTS = "allAccounts"
    ALL_ACCOUNTS_WITH_OWNER_NAME = "allAccountsWithOwnerName"

class AccountAccessAvailableAccountsEnum(str, Enum):
    ALL_ACCOUNTS = "allAccounts"
    ALL_ACCOUNTS_WITH_OWNER_NAME = "allAccountsWithOwnerName"

class AccountAccessAvailableAccountsWithBalanceEnum(str, Enum):
    ALL_ACCOUNTS = "allAccounts"
    ALL_ACCOUNTS_WITH_OWNER_NAME = "allAccountsWithOwnerName"


@dataclass_json
@dataclass
class AccountAccess:
    r"""AccountAccess
    Requested access services for a consent.
    
    """
    
    accounts: Optional[List[AccountReference16Ch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    additional_information: Optional[AdditionalInformationAccess] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalInformation') }})
    all_psd2: Optional[AccountAccessAllPsd2Enum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allPsd2') }})
    available_accounts: Optional[AccountAccessAvailableAccountsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableAccounts') }})
    available_accounts_with_balance: Optional[AccountAccessAvailableAccountsWithBalanceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableAccountsWithBalance') }})
    balances: Optional[List[AccountReference16Ch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balances') }})
    restricted_to: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictedTo') }})
    transactions: Optional[List[AccountReference16Ch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    

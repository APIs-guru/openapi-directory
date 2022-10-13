from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import accountreference16_ch
from . import additionalinformationaccess
from . import accountreference16_ch
from . import accountreference16_ch

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
    accounts: Optional[List[accountreference16_ch.AccountReference16Ch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts' }})
    additional_information: Optional[additionalinformationaccess.AdditionalInformationAccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalInformation' }})
    all_psd2: Optional[AccountAccessAllPsd2Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allPsd2' }})
    available_accounts: Optional[AccountAccessAvailableAccountsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableAccounts' }})
    available_accounts_with_balance: Optional[AccountAccessAvailableAccountsWithBalanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableAccountsWithBalance' }})
    balances: Optional[List[accountreference16_ch.AccountReference16Ch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balances' }})
    restricted_to: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictedTo' }})
    transactions: Optional[List[accountreference16_ch.AccountReference16Ch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactions' }})
    

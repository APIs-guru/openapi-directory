from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import balance
from . import accountstatus_enum

class AccountDetailsUsageEnum(str, Enum):
    PRIV = "PRIV"
    ORGA = "ORGA"


@dataclass_json
@dataclass
class AccountDetails:
    links: Optional[dict[str, hreftype.HrefType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    balances: Optional[List[balance.Balance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balances' }})
    bban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bban' }})
    bic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bic' }})
    cash_account_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cashAccountType' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    iban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iban' }})
    linked_accounts: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedAccounts' }})
    msisdn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'msisdn' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerName' }})
    product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    status: Optional[accountstatus_enum.AccountStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    usage: Optional[AccountDetailsUsageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage' }})
    

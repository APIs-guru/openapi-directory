from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SubaccountRequestSubAccountEditEnum(str, Enum):
    SET_PRICE = "setPrice"
    ADD_CREDIT = "addCredit"
    SET_RESTRICTION = "setRestriction"

class SubaccountRequestSubAccountRestrictionStopEnum(str, Enum):
    ZERO = "0"
    ONE = "1"

class SubaccountRequestSubAccountRestrictionTimeEnum(str, Enum):
    ZERO = "0"
    ONE = "1"


@dataclass_json
@dataclass
class SubaccountRequest:
    keyid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyid' }})
    sub_account_add_credit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subAccountAddCredit' }})
    sub_account_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subAccountCountryCode' }})
    sub_account_edit: SubaccountRequestSubAccountEditEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subAccountEdit' }})
    sub_account_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subAccountKeyId' }})
    sub_account_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subAccountPrice' }})
    sub_account_restriction_stop: Optional[SubaccountRequestSubAccountRestrictionStopEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subAccountRestrictionStop' }})
    sub_account_restriction_time: Optional[SubaccountRequestSubAccountRestrictionTimeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subAccountRestrictionTime' }})
    

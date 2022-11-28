from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    keyid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyid') }})
    sub_account_edit: SubaccountRequestSubAccountEditEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subAccountEdit') }})
    sub_account_add_credit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subAccountAddCredit') }})
    sub_account_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subAccountCountryCode') }})
    sub_account_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subAccountKeyId') }})
    sub_account_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subAccountPrice') }})
    sub_account_restriction_stop: Optional[SubaccountRequestSubAccountRestrictionStopEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subAccountRestrictionStop') }})
    sub_account_restriction_time: Optional[SubaccountRequestSubAccountRestrictionTimeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subAccountRestrictionTime') }})
    

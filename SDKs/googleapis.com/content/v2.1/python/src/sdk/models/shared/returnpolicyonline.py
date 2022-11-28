from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ReturnPolicyOnlineItemConditionsEnum(str, Enum):
    ITEM_CONDITION_UNSPECIFIED = "ITEM_CONDITION_UNSPECIFIED"
    NEW = "NEW"
    USED = "USED"

class ReturnPolicyOnlineReturnMethodsEnum(str, Enum):
    RETURN_METHOD_UNSPECIFIED = "RETURN_METHOD_UNSPECIFIED"
    BY_MAIL = "BY_MAIL"
    IN_STORE = "IN_STORE"
    AT_A_KIOSK = "AT_A_KIOSK"


@dataclass_json
@dataclass
class ReturnPolicyOnlineInput:
    r"""ReturnPolicyOnlineInput
    Return policy online object. This is currently used to represent return policies for ads and free listings programs.
    """
    
    countries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countries') }})
    item_conditions: Optional[List[ReturnPolicyOnlineItemConditionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemConditions') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    policy: Optional[ReturnPolicyOnlinePolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    restocking_fee: Optional[ReturnPolicyOnlineRestockingFee] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restockingFee') }})
    return_methods: Optional[List[ReturnPolicyOnlineReturnMethodsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnMethods') }})
    return_policy_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnPolicyUri') }})
    return_reason_category_info: Optional[List[ReturnPolicyOnlineReturnReasonCategoryInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnReasonCategoryInfo') }})
    

@dataclass_json
@dataclass
class ReturnPolicyOnline:
    r"""ReturnPolicyOnline
    Return policy online object. This is currently used to represent return policies for ads and free listings programs.
    """
    
    countries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countries') }})
    item_conditions: Optional[List[ReturnPolicyOnlineItemConditionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemConditions') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    policy: Optional[ReturnPolicyOnlinePolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    restocking_fee: Optional[ReturnPolicyOnlineRestockingFee] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restockingFee') }})
    return_methods: Optional[List[ReturnPolicyOnlineReturnMethodsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnMethods') }})
    return_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnPolicyId') }})
    return_policy_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnPolicyUri') }})
    return_reason_category_info: Optional[List[ReturnPolicyOnlineReturnReasonCategoryInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnReasonCategoryInfo') }})
    

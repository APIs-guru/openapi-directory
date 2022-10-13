from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import returnpolicyonlinepolicy
from . import returnpolicyonlinerestockingfee
from . import returnpolicyonlinereturnreasoncategoryinfo

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
class ReturnPolicyOnline:
    countries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countries' }})
    item_conditions: Optional[List[ReturnPolicyOnlineItemConditionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemConditions' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    policy: Optional[returnpolicyonlinepolicy.ReturnPolicyOnlinePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    restocking_fee: Optional[returnpolicyonlinerestockingfee.ReturnPolicyOnlineRestockingFee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restockingFee' }})
    return_methods: Optional[List[ReturnPolicyOnlineReturnMethodsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnMethods' }})
    return_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnPolicyId' }})
    return_policy_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnPolicyUri' }})
    return_reason_category_info: Optional[List[returnpolicyonlinereturnreasoncategoryinfo.ReturnPolicyOnlineReturnReasonCategoryInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnReasonCategoryInfo' }})
    

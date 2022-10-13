from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import returnpolicyonlinereturnshippingfee

class ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum(str, Enum):
    RETURN_LABEL_SOURCE_UNSPECIFIED = "RETURN_LABEL_SOURCE_UNSPECIFIED"
    DOWNLOAD_AND_PRINT = "DOWNLOAD_AND_PRINT"
    IN_THE_BOX = "IN_THE_BOX"
    CUSTOMER_RESPONSIBILITY = "CUSTOMER_RESPONSIBILITY"

class ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum(str, Enum):
    RETURN_REASON_CATEGORY_UNSPECIFIED = "RETURN_REASON_CATEGORY_UNSPECIFIED"
    BUYER_REMORSE = "BUYER_REMORSE"
    ITEM_DEFECT = "ITEM_DEFECT"


@dataclass_json
@dataclass
class ReturnPolicyOnlineReturnReasonCategoryInfo:
    return_label_source: Optional[ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnLabelSource' }})
    return_reason_category: Optional[ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnReasonCategory' }})
    return_shipping_fee: Optional[returnpolicyonlinereturnshippingfee.ReturnPolicyOnlineReturnShippingFee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnShippingFee' }})
    

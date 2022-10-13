from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class UpdatePageElementsZOrderRequestOperationEnum(str, Enum):
    Z_ORDER_OPERATION_UNSPECIFIED = "Z_ORDER_OPERATION_UNSPECIFIED"
    BRING_TO_FRONT = "BRING_TO_FRONT"
    BRING_FORWARD = "BRING_FORWARD"
    SEND_BACKWARD = "SEND_BACKWARD"
    SEND_TO_BACK = "SEND_TO_BACK"


@dataclass_json
@dataclass
class UpdatePageElementsZOrderRequest:
    operation: Optional[UpdatePageElementsZOrderRequestOperationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    page_element_object_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageElementObjectIds' }})
    

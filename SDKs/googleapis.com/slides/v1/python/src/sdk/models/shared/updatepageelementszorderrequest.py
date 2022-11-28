from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UpdatePageElementsZOrderRequestOperationEnum(str, Enum):
    Z_ORDER_OPERATION_UNSPECIFIED = "Z_ORDER_OPERATION_UNSPECIFIED"
    BRING_TO_FRONT = "BRING_TO_FRONT"
    BRING_FORWARD = "BRING_FORWARD"
    SEND_BACKWARD = "SEND_BACKWARD"
    SEND_TO_BACK = "SEND_TO_BACK"


@dataclass_json
@dataclass
class UpdatePageElementsZOrderRequest:
    r"""UpdatePageElementsZOrderRequest
    Updates the Z-order of page elements. Z-order is an ordering of the elements on the page from back to front. The page element in the front may cover the elements that are behind it.
    """
    
    operation: Optional[UpdatePageElementsZOrderRequestOperationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    page_element_object_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageElementObjectIds') }})
    

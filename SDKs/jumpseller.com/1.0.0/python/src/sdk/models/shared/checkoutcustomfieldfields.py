from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CheckoutCustomFieldFieldsAreaEnum(str, Enum):
    CONTACT = "contact"
    BILLING_SHIPPING = "billing_shipping"
    OTHER = "other"

class CheckoutCustomFieldFieldsTypeEnum(str, Enum):
    TEXT = "text"
    SELECT = "select"
    INPUT = "input"
    CHECKBOX = "checkbox"


@dataclass_json
@dataclass
class CheckoutCustomFieldFields:
    area: Optional[CheckoutCustomFieldFieldsAreaEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('area') }})
    custom_field_select_options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_field_select_options') }})
    deletable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletable') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    type: Optional[CheckoutCustomFieldFieldsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

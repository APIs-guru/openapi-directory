from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class CheckoutCustomFieldEditFieldsAreaEnum(str, Enum):
    CONTACT = "contact"
    BILLING_SHIPPING = "billing_shipping"
    OTHER = "other"

class CheckoutCustomFieldEditFieldsTypeEnum(str, Enum):
    TEXT = "text"
    SELECT = "select"
    INPUT = "input"
    CHECKBOX = "checkbox"
    DATE = "date"


@dataclass_json
@dataclass
class CheckoutCustomFieldEditFields:
    area: Optional[CheckoutCustomFieldEditFieldsAreaEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'area' }})
    custom_field_select_options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_field_select_options' }})
    deletable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletable' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    type: Optional[CheckoutCustomFieldEditFieldsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

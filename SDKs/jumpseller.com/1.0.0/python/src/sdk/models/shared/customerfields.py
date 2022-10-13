from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import customeradditionalfield
from . import customercategory

class CustomerFieldsStatusEnum(str, Enum):
    APPROVED = "approved"
    PENDING = "pending"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class CustomerFields:
    billing_address: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_address' }})
    customer_additional_fields: Optional[List[customeradditionalfield.CustomerAdditionalField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_additional_fields' }})
    customer_categories: Optional[List[customercategory.CustomerCategory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_categories' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    shipping_address: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping_address' }})
    status: Optional[CustomerFieldsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    surname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'surname' }})
    

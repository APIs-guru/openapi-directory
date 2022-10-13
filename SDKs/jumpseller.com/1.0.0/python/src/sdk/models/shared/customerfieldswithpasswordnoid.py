from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class CustomerFieldsWithPasswordNoIDStatusEnum(str, Enum):
    APPROVED = "approved"
    PENDING = "pending"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class CustomerFieldsWithPasswordNoID:
    billing_address: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_address' }})
    customer_category: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_category' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    shipping_address: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping_address' }})
    status: Optional[CustomerFieldsWithPasswordNoIDStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

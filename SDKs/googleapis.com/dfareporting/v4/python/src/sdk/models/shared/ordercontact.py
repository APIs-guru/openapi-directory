from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class OrderContactContactTypeEnum(str, Enum):
    PLANNING_ORDER_CONTACT_BUYER_CONTACT = "PLANNING_ORDER_CONTACT_BUYER_CONTACT"
    PLANNING_ORDER_CONTACT_BUYER_BILLING_CONTACT = "PLANNING_ORDER_CONTACT_BUYER_BILLING_CONTACT"
    PLANNING_ORDER_CONTACT_SELLER_CONTACT = "PLANNING_ORDER_CONTACT_SELLER_CONTACT"


@dataclass_json
@dataclass
class OrderContact:
    contact_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactInfo' }})
    contact_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactName' }})
    contact_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactTitle' }})
    contact_type: Optional[OrderContactContactTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactType' }})
    signature_user_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signatureUserProfileId' }})
    

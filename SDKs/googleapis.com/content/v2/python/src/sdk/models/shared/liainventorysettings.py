from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LiaInventorySettings:
    inventory_verification_contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryVerificationContactEmail' }})
    inventory_verification_contact_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryVerificationContactName' }})
    inventory_verification_contact_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryVerificationContactStatus' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

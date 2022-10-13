from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import postaladdress


@dataclass_json
@dataclass
class AddressVerificationData:
    address: Optional[postaladdress.PostalAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessName' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import postaladdress


@dataclass_json
@dataclass
class OrganizationInfo:
    address: Optional[postaladdress.PostalAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    registered_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registeredDomain' }})
    

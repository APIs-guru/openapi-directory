from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import postaladdress


@dataclass_json
@dataclass
class ServiceBusinessContext:
    address: Optional[postaladdress.PostalAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    

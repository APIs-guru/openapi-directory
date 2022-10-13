from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import postaladdress6_ch
from . import institutionalidentification2


@dataclass_json
@dataclass
class CreditorAgent7Ch:
    address: Optional[postaladdress6_ch.PostalAddress6Ch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    bic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bic' }})
    iid: Optional[institutionalidentification2.InstitutionalIdentification2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iid' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customerfieldswithpasswordnoid


@dataclass_json
@dataclass
class CustomerWithPasswordNoID:
    customer: Optional[customerfieldswithpasswordnoid.CustomerFieldsWithPasswordNoID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer' }})
    

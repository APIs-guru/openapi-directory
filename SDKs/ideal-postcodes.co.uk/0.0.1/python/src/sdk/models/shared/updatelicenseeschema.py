from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import createlicenseedaily


@dataclass_json
@dataclass
class UpdateLicenseeSchema:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    daily: Optional[createlicenseedaily.CreateLicenseeDaily] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'daily' }})
    postcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postcode' }})
    whitelist: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'whitelist' }})
    

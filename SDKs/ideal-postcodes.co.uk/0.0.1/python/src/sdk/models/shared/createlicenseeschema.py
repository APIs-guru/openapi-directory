from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import createlicenseedaily


@dataclass_json
@dataclass
class CreateLicenseeSchema:
    address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    daily: Optional[createlicenseedaily.CreateLicenseeDaily] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'daily' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    postcode: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postcode' }})
    whitelist: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'whitelist' }})
    

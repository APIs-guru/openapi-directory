from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PartnerStoreStatusStatus:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    

@dataclass_json
@dataclass
class PartnerStoreStatus:
    status: Optional[PartnerStoreStatusStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

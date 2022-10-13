from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AquiferSerializerBasic:
    aquifer_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aquifer_id' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    

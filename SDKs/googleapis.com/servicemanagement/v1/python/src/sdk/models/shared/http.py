from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import httprule


@dataclass_json
@dataclass
class HTTP:
    fully_decode_reserved_expansion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullyDecodeReservedExpansion' }})
    rules: Optional[List[httprule.HTTPRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

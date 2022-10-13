from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import protectedrange


@dataclass_json
@dataclass
class AddProtectedRangeRequest:
    protected_range: Optional[protectedrange.ProtectedRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protectedRange' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import protectedrange


@dataclass_json
@dataclass
class UpdateProtectedRangeRequest:
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    protected_range: Optional[protectedrange.ProtectedRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protectedRange' }})
    

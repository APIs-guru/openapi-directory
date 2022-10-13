from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleHomeEnterpriseSdmV1Structure:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    traits: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traits' }})
    

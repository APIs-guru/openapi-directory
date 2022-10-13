from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetRegionsResponse:
    regions: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    

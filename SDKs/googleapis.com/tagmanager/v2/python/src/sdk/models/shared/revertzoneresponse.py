from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import zone


@dataclass_json
@dataclass
class RevertZoneResponse:
    zone: Optional[zone.Zone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    

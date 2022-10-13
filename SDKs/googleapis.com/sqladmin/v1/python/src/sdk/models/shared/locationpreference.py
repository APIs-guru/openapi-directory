from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LocationPreference:
    follow_gae_application: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followGaeApplication' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    secondary_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryZone' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    

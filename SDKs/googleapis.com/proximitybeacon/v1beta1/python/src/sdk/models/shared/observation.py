from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import advertisedid


@dataclass_json
@dataclass
class Observation:
    advertised_id: Optional[advertisedid.AdvertisedID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertisedId' }})
    telemetry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'telemetry' }})
    timestamp_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampMs' }})
    

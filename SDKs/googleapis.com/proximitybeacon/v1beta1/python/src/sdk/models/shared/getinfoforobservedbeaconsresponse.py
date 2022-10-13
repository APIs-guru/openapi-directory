from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import beaconinfo


@dataclass_json
@dataclass
class GetInfoForObservedBeaconsResponse:
    beacons: Optional[List[beaconinfo.BeaconInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beacons' }})
    

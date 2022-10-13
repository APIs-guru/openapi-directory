from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import latlng
from . import level


@dataclass_json
@dataclass
class Pose:
    accuracy_meters: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accuracyMeters' }})
    altitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'altitude' }})
    gps_record_timestamp_unix_epoch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gpsRecordTimestampUnixEpoch' }})
    heading: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heading' }})
    lat_lng_pair: Optional[latlng.LatLng] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latLngPair' }})
    level: Optional[level.Level] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'level' }})
    pitch: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pitch' }})
    roll: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roll' }})
    

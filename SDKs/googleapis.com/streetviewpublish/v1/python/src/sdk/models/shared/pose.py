from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Pose:
    r"""Pose
    Raw pose measurement for an entity.
    """
    
    accuracy_meters: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accuracyMeters') }})
    altitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altitude') }})
    gps_record_timestamp_unix_epoch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gpsRecordTimestampUnixEpoch') }})
    heading: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heading') }})
    lat_lng_pair: Optional[LatLng] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latLngPair') }})
    level: Optional[Level] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    pitch: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pitch') }})
    roll: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roll') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import measurement3d
from . import measurement3d
from . import measurement3d


@dataclass_json
@dataclass
class Imu:
    accel_mpsps: Optional[List[measurement3d.Measurement3d]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accelMpsps' }})
    gyro_rps: Optional[List[measurement3d.Measurement3d]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gyroRps' }})
    mag_ut: Optional[List[measurement3d.Measurement3d]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'magUt' }})
    

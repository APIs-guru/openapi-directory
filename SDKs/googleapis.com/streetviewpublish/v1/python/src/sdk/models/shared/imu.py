from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Imu:
    r"""Imu
    IMU data from the device sensors.
    """
    
    accel_mpsps: Optional[List[Measurement3d]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accelMpsps') }})
    gyro_rps: Optional[List[Measurement3d]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gyroRps') }})
    mag_ut: Optional[List[Measurement3d]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('magUt') }})
    

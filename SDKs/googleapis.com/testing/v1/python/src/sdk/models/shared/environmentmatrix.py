from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import androiddevicelist
from . import androidmatrix
from . import iosdevicelist


@dataclass_json
@dataclass
class EnvironmentMatrix:
    android_device_list: Optional[androiddevicelist.AndroidDeviceList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidDeviceList' }})
    android_matrix: Optional[androidmatrix.AndroidMatrix] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidMatrix' }})
    ios_device_list: Optional[iosdevicelist.IosDeviceList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosDeviceList' }})
    

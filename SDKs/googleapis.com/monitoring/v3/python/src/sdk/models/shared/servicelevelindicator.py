from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import basicsli
from . import requestbasedsli
from . import windowsbasedsli


@dataclass_json
@dataclass
class ServiceLevelIndicator:
    basic_sli: Optional[basicsli.BasicSli] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicSli' }})
    request_based: Optional[requestbasedsli.RequestBasedSli] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestBased' }})
    windows_based: Optional[windowsbasedsli.WindowsBasedSli] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windowsBased' }})
    

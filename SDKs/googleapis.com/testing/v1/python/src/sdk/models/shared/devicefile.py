from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import obbfile
from . import regularfile


@dataclass_json
@dataclass
class DeviceFile:
    obb_file: Optional[obbfile.ObbFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obbFile' }})
    regular_file: Optional[regularfile.RegularFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regularFile' }})
    

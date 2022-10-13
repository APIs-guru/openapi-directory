from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deviceprofiletype_enum


@dataclass_json
@dataclass
class DeviceProfileInfo:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    type: Optional[deviceprofiletype_enum.DeviceProfileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

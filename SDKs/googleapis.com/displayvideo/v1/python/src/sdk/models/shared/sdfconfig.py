from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SdfConfigVersionEnum(str, Enum):
    SDF_VERSION_UNSPECIFIED = "SDF_VERSION_UNSPECIFIED"
    SDF_VERSION_3_1 = "SDF_VERSION_3_1"
    SDF_VERSION_4 = "SDF_VERSION_4"
    SDF_VERSION_4_1 = "SDF_VERSION_4_1"
    SDF_VERSION_4_2 = "SDF_VERSION_4_2"
    SDF_VERSION_5 = "SDF_VERSION_5"
    SDF_VERSION_5_1 = "SDF_VERSION_5_1"
    SDF_VERSION_5_2 = "SDF_VERSION_5_2"
    SDF_VERSION_5_3 = "SDF_VERSION_5_3"
    SDF_VERSION_5_4 = "SDF_VERSION_5_4"
    SDF_VERSION_5_5 = "SDF_VERSION_5_5"


@dataclass_json
@dataclass
class SdfConfig:
    admin_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminEmail' }})
    version: Optional[SdfConfigVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

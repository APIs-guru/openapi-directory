from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class IstioConfigAuthEnum(str, Enum):
    AUTH_NONE = "AUTH_NONE"
    AUTH_MUTUAL_TLS = "AUTH_MUTUAL_TLS"


@dataclass_json
@dataclass
class IstioConfig:
    auth: Optional[IstioConfigAuthEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    

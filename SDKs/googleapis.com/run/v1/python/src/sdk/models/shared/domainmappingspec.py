from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DomainMappingSpecCertificateModeEnum(str, Enum):
    CERTIFICATE_MODE_UNSPECIFIED = "CERTIFICATE_MODE_UNSPECIFIED"
    NONE = "NONE"
    AUTOMATIC = "AUTOMATIC"


@dataclass_json
@dataclass
class DomainMappingSpec:
    certificate_mode: Optional[DomainMappingSpecCertificateModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateMode' }})
    force_override: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forceOverride' }})
    route_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeName' }})
    

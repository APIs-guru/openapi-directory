from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import eckeytype
from . import rsakeytype


@dataclass_json
@dataclass
class AllowedKeyType:
    elliptic_curve: Optional[eckeytype.EcKeyType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ellipticCurve' }})
    rsa: Optional[rsakeytype.RsaKeyType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rsa' }})
    

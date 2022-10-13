from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccessTokenCertConf:
    x5t_number_s256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'x5t#S256' }})
    

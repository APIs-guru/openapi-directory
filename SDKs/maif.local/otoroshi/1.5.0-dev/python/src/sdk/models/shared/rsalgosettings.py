from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RsAlgoSettings:
    private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateKey' }})
    public_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKey' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

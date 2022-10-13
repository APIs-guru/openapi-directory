from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RsaKeyType:
    max_modulus_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxModulusSize' }})
    min_modulus_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minModulusSize' }})
    

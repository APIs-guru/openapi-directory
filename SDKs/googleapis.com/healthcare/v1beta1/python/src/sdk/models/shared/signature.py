from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import image


@dataclass_json
@dataclass
class Signature:
    image: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    signature_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signatureTime' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    

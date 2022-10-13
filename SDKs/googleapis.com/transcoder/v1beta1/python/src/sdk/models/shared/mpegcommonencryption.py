from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MpegCommonEncryption:
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyId' }})
    scheme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheme' }})
    

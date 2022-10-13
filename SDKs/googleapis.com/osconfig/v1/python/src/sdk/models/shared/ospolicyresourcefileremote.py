from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OsPolicyResourceFileRemote:
    sha256_checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha256Checksum' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

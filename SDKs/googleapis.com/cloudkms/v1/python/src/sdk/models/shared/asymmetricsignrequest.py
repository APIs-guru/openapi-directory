from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import digest


@dataclass_json
@dataclass
class AsymmetricSignRequest:
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    data_crc32c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataCrc32c' }})
    digest: Optional[digest.Digest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'digest' }})
    digest_crc32c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'digestCrc32c' }})
    

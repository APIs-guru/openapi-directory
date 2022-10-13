from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GenerateRandomBytesResponse:
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    data_crc32c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataCrc32c' }})
    

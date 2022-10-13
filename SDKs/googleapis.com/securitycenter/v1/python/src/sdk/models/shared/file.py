from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class File:
    contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contents' }})
    hashed_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hashedSize' }})
    partially_hashed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partiallyHashed' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha256' }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    

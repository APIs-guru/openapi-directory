from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImageByNameInfo:
    context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Context' }})
    file_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileLength' }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Format' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    theme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Theme' }})
    

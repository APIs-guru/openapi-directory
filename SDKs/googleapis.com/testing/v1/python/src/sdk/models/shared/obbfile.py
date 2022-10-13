from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import filereference


@dataclass_json
@dataclass
class ObbFile:
    obb: Optional[filereference.FileReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obb' }})
    obb_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obbFileName' }})
    

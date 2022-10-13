from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import filesystementrytype_enum


@dataclass_json
@dataclass
class FileSystemEntryInfo:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    type: Optional[filesystementrytype_enum.FileSystemEntryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

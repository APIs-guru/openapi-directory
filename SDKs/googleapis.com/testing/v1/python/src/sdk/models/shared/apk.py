from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import filereference


@dataclass_json
@dataclass
class Apk:
    location: Optional[filereference.FileReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    

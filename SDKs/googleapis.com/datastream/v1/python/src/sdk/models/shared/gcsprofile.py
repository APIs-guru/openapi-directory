from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GcsProfile:
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucket' }})
    root_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootPath' }})
    

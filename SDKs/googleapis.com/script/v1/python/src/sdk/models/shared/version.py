from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Version:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    script_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptId' }})
    version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionNumber' }})
    

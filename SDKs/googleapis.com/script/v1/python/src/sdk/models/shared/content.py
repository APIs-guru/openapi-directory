from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import file


@dataclass_json
@dataclass
class Content:
    files: Optional[List[file.File]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    script_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptId' }})
    

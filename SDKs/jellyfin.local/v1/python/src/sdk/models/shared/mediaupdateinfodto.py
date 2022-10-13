from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MediaUpdateInfoDto:
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    update_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateType' }})
    

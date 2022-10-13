from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RemoveWebAppRequest:
    allow_missing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowMissing' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    immediate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'immediate' }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validateOnly' }})
    

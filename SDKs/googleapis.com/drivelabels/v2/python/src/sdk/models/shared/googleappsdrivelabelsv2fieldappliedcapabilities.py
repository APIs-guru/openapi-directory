from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2FieldAppliedCapabilities:
    can_read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canRead' }})
    can_search: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canSearch' }})
    can_write: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canWrite' }})
    

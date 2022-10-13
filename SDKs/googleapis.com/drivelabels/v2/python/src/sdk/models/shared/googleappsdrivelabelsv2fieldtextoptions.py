from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2FieldTextOptions:
    max_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxLength' }})
    min_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minLength' }})
    

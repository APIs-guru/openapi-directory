from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AndroidMatrix:
    android_model_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidModelIds' }})
    android_version_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidVersionIds' }})
    locales: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locales' }})
    orientations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orientations' }})
    

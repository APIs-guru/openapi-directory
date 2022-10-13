from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AndroidDevice:
    android_model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidModelId' }})
    android_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidVersionId' }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    orientation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orientation' }})
    

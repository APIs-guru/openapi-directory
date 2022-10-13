from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IosDevice:
    ios_model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosModelId' }})
    ios_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosVersionId' }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    orientation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orientation' }})
    

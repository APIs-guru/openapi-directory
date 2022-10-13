from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProfileInfoRepresentation:
    disabled_features: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabledFeatures' }})
    experimental_features: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'experimentalFeatures' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    preview_features: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previewFeatures' }})
    

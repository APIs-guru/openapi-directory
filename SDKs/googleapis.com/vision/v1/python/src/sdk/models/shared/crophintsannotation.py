from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import crophint


@dataclass_json
@dataclass
class CropHintsAnnotation:
    crop_hints: Optional[List[crophint.CropHint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cropHints' }})
    

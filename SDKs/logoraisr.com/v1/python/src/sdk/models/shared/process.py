from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Process:
    crop: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crop' }})
    flip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flip' }})
    mirror: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mirror' }})
    processing_algorithm: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processing_algorithm' }})
    resize: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resize' }})
    rotate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rotate' }})
    

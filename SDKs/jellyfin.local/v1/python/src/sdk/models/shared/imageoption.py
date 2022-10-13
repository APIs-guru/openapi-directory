from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import imagetype_enum


@dataclass_json
@dataclass
class ImageOption:
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    min_width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinWidth' }})
    type: Optional[imagetype_enum.ImageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

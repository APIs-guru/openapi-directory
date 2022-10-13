from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import thumbnail
from . import thumbnail
from . import thumbnail
from . import thumbnail


@dataclass_json
@dataclass
class ThumbnailDetails:
    high: Optional[thumbnail.Thumbnail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'high' }})
    maxres: Optional[thumbnail.Thumbnail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxres' }})
    medium: Optional[thumbnail.Thumbnail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'medium' }})
    standard: Optional[thumbnail.Thumbnail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standard' }})
    

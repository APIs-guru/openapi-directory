from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import size


@dataclass_json
@dataclass
class StretchedPictureFill:
    content_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentUrl' }})
    size: Optional[size.Size] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    

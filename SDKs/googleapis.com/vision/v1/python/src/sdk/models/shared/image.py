from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import imagesource


@dataclass_json
@dataclass
class Image:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    source: Optional[imagesource.ImageSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    

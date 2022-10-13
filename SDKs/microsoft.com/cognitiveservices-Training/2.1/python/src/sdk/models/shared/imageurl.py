from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImageURL:
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }, 'form': { 'field_name': 'url' }})
    

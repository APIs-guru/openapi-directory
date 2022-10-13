from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VideoPlayer:
    embed_height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embedHeight' }})
    embed_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embedHtml' }})
    embed_width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embedWidth' }})
    

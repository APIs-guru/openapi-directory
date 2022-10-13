from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import textlink
from . import videolink


@dataclass_json
@dataclass
class ExtraMaterial:
    link: Optional[textlink.TextLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    video: Optional[videolink.VideoLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'video' }})
    

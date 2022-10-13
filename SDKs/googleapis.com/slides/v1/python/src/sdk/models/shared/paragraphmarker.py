from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bullet
from . import paragraphstyle


@dataclass_json
@dataclass
class ParagraphMarker:
    bullet: Optional[bullet.Bullet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bullet' }})
    style: Optional[paragraphstyle.ParagraphStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'style' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GraphicsStatsBucket:
    frame_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frameCount' }})
    render_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renderMillis' }})
    

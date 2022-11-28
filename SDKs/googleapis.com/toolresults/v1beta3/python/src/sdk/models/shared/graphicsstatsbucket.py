from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GraphicsStatsBucket:
    frame_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameCount') }})
    render_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renderMillis') }})
    

from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import actionhookactionbody
from . import iframeactionbody
from . import actionhookactionbody
from . import iframeactionbody
from . import iframeactionbody


@dataclass_json
@dataclass
class TopLevelActions:
    primary: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    secondary: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondary' }})
    settings: Optional[iframeactionbody.IFrameActionBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    

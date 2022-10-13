from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import formaction
from . import openlink


@dataclass_json
@dataclass
class OnClick:
    action: Optional[formaction.FormAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    open_link: Optional[openlink.OpenLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openLink' }})
    

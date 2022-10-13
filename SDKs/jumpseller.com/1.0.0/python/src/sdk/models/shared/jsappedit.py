from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import jsapp


@dataclass_json
@dataclass
class JsAppEdit:
    app: Optional[jsapp.JsApp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app' }})
    

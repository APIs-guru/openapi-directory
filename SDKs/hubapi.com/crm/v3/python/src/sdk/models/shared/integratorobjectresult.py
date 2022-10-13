from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import actionhookactionbody
from . import iframeactionbody
from . import objecttoken


@dataclass_json
@dataclass
class IntegratorObjectResult:
    actions: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    link_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkUrl' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    tokens: List[objecttoken.ObjectToken] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokens' }})
    

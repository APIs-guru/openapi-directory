from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import app


@dataclass_json
@dataclass
class AppList:
    default_app_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultAppIds' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    items: Optional[List[app.App]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    

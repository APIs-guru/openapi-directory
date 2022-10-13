from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class WebAppStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class WebApp:
    api_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKeyId' }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    app_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appUrls' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    state: Optional[WebAppStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    web_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webId' }})
    

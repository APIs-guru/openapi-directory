from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deeplink


@dataclass_json
@dataclass
class LandingPage:
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archived' }})
    deep_links: Optional[List[deeplink.DeepLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deepLinks' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

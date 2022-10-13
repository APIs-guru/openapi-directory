from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Site:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url_or_app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlOrAppId' }})
    

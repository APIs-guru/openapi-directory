from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WmxSite:
    permission_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissionLevel' }})
    site_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteUrl' }})
    

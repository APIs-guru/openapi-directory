from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sites


@dataclass_json
@dataclass
class SiteTypeLayer:
    sites: Optional[List[sites.Sites]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sites' }})
    

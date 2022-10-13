from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import site


@dataclass_json
@dataclass
class BulkEditSitesResponse:
    sites: Optional[List[site.Site]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sites' }})
    

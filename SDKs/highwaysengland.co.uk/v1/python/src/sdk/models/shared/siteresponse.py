from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import siteresult


@dataclass_json
@dataclass
class SiteResponse:
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_count' }})
    sites: Optional[List[siteresult.SiteResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sites' }})
    

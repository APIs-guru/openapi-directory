from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import wmxsite


@dataclass_json
@dataclass
class SitesListResponse:
    site_entry: Optional[List[wmxsite.WmxSite]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteEntry' }})
    

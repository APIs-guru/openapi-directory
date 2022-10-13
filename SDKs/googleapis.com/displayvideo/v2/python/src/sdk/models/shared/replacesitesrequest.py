from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import site


@dataclass_json
@dataclass
class ReplaceSitesRequest:
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    new_sites: Optional[List[site.Site]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newSites' }})
    partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partnerId' }})
    

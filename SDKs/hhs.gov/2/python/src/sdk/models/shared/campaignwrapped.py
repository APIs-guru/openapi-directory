from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import meta
from . import campaign


@dataclass_json
@dataclass
class CampaignWrapped:
    callback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callback' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    results: Optional[List[campaign.Campaign]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import obstandingorder6
from . import links
from . import meta


@dataclass_json
@dataclass
class ObReadStandingOrder6Data:
    standing_order: Optional[List[obstandingorder6.ObStandingOrder6]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandingOrder' }})
    

@dataclass_json
@dataclass
class ObReadStandingOrder6:
    data: ObReadStandingOrder6Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Meta' }})
    

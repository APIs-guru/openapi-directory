from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mobilecarrier


@dataclass_json
@dataclass
class MobileCarriersListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    mobile_carriers: Optional[List[mobilecarrier.MobileCarrier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileCarriers' }})
    

from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import integratorobjectresult
from . import toplevelactions

class IntegratorCardPayloadResponseResponseVersionEnum(str, Enum):
    V1 = "v1"
    V3 = "v3"


@dataclass_json
@dataclass
class IntegratorCardPayloadResponse:
    all_items_link_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allItemsLinkUrl' }})
    card_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cardLabel' }})
    response_version: Optional[IntegratorCardPayloadResponseResponseVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseVersion' }})
    sections: Optional[List[integratorobjectresult.IntegratorObjectResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sections' }})
    top_level_actions: Optional[toplevelactions.TopLevelActions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topLevelActions' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCount' }})
    

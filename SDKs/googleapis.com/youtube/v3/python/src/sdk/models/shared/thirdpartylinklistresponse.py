from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import thirdpartylink


@dataclass_json
@dataclass
class ThirdPartyLinkListResponse:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    items: Optional[List[thirdpartylink.ThirdPartyLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import shippingsettingscustombatchresponseentry


@dataclass_json
@dataclass
class ShippingsettingsCustomBatchResponse:
    entries: Optional[List[shippingsettingscustombatchresponseentry.ShippingsettingsCustomBatchResponseEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    

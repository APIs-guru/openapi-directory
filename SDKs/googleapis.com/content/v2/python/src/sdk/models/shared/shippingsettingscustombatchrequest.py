from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import shippingsettingscustombatchrequestentry


@dataclass_json
@dataclass
class ShippingsettingsCustomBatchRequest:
    entries: Optional[List[shippingsettingscustombatchrequestentry.ShippingsettingsCustomBatchRequestEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    

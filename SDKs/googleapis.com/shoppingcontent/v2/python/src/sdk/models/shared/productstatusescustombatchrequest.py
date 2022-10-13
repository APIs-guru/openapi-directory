from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import productstatusescustombatchrequestentry


@dataclass_json
@dataclass
class ProductstatusesCustomBatchRequest:
    entries: Optional[List[productstatusescustombatchrequestentry.ProductstatusesCustomBatchRequestEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    

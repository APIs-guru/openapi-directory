from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import queryrequestpayload


@dataclass_json
@dataclass
class QueryRequestInput:
    payload: Optional[queryrequestpayload.QueryRequestPayload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    

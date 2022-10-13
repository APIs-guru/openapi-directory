from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import queryresponsepayload


@dataclass_json
@dataclass
class QueryResponse:
    payload: Optional[queryresponsepayload.QueryResponsePayload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    

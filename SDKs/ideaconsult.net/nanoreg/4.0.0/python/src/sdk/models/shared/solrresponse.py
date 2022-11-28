from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SolrResponseResponse:
    docs: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('docs') }})
    max_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxScore') }})
    num_found: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numFound') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    

@dataclass_json
@dataclass
class SolrResponseResponseHeader:
    q_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QTime') }})
    params: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    zk_connected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zkConnected') }})
    

@dataclass_json
@dataclass
class SolrResponse:
    response: Optional[SolrResponseResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    response_header: Optional[SolrResponseResponseHeader] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseHeader') }})
    

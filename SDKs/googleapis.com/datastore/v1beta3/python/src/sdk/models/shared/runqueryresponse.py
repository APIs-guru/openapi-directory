from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import queryresultbatch
from . import query


@dataclass_json
@dataclass
class RunQueryResponse:
    batch: Optional[queryresultbatch.QueryResultBatch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batch' }})
    query: Optional[query.Query] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    

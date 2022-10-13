from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gettxresponse


@dataclass_json
@dataclass
class GetTxsResponse:
    pages_total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagesTotal' }})
    txs: Optional[List[gettxresponse.GetTxResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txs' }})
    

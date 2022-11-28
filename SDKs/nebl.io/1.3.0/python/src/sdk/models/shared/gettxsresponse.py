from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetTxsResponse:
    r"""GetTxsResponse
    Object containing an array of transaction objects
    """
    
    pages_total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagesTotal') }})
    txs: Optional[List[GetTxResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('txs') }})
    

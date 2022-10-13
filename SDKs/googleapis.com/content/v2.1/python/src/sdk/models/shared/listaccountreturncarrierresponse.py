from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountreturncarrier


@dataclass_json
@dataclass
class ListAccountReturnCarrierResponse:
    account_return_carriers: Optional[List[accountreturncarrier.AccountReturnCarrier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountReturnCarriers' }})
    

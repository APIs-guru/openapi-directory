from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import addheldaccountresult


@dataclass_json
@dataclass
class AddHeldAccountsResponse:
    responses: Optional[List[addheldaccountresult.AddHeldAccountResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responses' }})
    

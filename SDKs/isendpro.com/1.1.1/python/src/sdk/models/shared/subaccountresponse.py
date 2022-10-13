from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SubaccountResponseEtatEtat:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    sub_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subAccountId' }})
    sub_account_keyid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subAccountKeyid' }})
    

@dataclass_json
@dataclass
class SubaccountResponseEtat:
    etat: Optional[List[SubaccountResponseEtatEtat]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etat' }})
    

@dataclass_json
@dataclass
class SubaccountResponse:
    etat: Optional[SubaccountResponseEtat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etat' }})
    

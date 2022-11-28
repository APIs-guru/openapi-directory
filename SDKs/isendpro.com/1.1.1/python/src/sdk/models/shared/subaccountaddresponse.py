from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SubaccountAddResponseEtatEtat:
    code: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    sub_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subAccountId') }})
    sub_account_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subAccountKeyId') }})
    sub_account_login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subAccountLogin') }})
    

@dataclass_json
@dataclass
class SubaccountAddResponseEtat:
    etat: Optional[List[SubaccountAddResponseEtatEtat]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etat') }})
    

@dataclass_json
@dataclass
class SubaccountAddResponse:
    etat: Optional[SubaccountAddResponseEtat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etat') }})
    

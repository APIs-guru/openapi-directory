from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class SubaccountAddRequestSubAccountEditEnum(str, Enum):
    ADD_ACCOUNT = "addAccount"


@dataclass_json
@dataclass
class SubaccountAddRequest:
    keyid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyid' }})
    sub_account_edit: SubaccountAddRequestSubAccountEditEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subAccountEdit' }})
    sub_account_login: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subAccountLogin' }})
    sub_account_password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subAccountPassword' }})
    

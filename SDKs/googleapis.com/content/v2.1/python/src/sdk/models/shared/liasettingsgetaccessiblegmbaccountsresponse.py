from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LiasettingsGetAccessibleGmbAccountsResponse:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    gmb_accounts: Optional[List[GmbAccountsGmbAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gmbAccounts') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    

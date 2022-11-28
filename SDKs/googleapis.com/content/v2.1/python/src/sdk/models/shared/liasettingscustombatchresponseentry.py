from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LiasettingsCustomBatchResponseEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    errors: Optional[Errors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    gmb_accounts: Optional[GmbAccounts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gmbAccounts') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    lia_settings: Optional[LiaSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liaSettings') }})
    pos_data_providers: Optional[List[PosDataProviders]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posDataProviders') }})
    

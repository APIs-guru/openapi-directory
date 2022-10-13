from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import errors
from . import gmbaccounts
from . import liasettings
from . import posdataproviders


@dataclass_json
@dataclass
class LiasettingsCustomBatchResponseEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    errors: Optional[errors.Errors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    gmb_accounts: Optional[gmbaccounts.GmbAccounts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gmbAccounts' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    lia_settings: Optional[liasettings.LiaSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liaSettings' }})
    pos_data_providers: Optional[List[posdataproviders.PosDataProviders]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'posDataProviders' }})
    

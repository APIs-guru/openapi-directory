from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LiasettingsCustomBatchRequestEntry:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactEmail') }})
    contact_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactName') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    gmb_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gmbEmail') }})
    lia_settings: Optional[LiaSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liaSettings') }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    pos_data_provider_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posDataProviderId') }})
    pos_external_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posExternalAccountId') }})
    

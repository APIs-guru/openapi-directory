from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountsCustomBatchRequestEntryInput:
    r"""AccountsCustomBatchRequestEntryInput
    A batch entry encoding a single non-batch accounts request.
    """
    
    account: Optional[AccountInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force') }})
    label_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelIds') }})
    link_request: Optional[AccountsCustomBatchRequestEntryLinkRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkRequest') }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    overwrite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overwrite') }})
    view: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    

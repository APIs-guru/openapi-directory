from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BillingAccountInput:
    r"""BillingAccountInput
    A billing account in the [Google Cloud Console](https://console.cloud.google.com/). You can assign a billing account to one or more projects.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    master_billing_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterBillingAccount') }})
    

@dataclass_json
@dataclass
class BillingAccount:
    r"""BillingAccount
    A billing account in the [Google Cloud Console](https://console.cloud.google.com/). You can assign a billing account to one or more projects.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    master_billing_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterBillingAccount') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    open: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('open') }})
    

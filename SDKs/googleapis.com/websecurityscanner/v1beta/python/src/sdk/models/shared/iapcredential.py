from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IapCredential:
    r"""IapCredential
    Describes authentication configuration for Identity-Aware-Proxy (IAP).
    """
    
    iap_test_service_account_info: Optional[IapTestServiceAccountInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iapTestServiceAccountInfo') }})
    

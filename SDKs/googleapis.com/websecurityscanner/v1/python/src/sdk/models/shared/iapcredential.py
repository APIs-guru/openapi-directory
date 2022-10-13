from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import iaptestserviceaccountinfo


@dataclass_json
@dataclass
class IapCredential:
    iap_test_service_account_info: Optional[iaptestserviceaccountinfo.IapTestServiceAccountInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iapTestServiceAccountInfo' }})
    

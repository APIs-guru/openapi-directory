from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse:
    r"""GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse
    Response message for CloudChannelService.CheckCloudIdentityAccountsExist.
    """
    
    cloud_identity_accounts: Optional[List[GoogleCloudChannelV1CloudIdentityCustomerAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudIdentityAccounts') }})
    

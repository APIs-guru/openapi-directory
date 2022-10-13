from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1cloudidentitycustomeraccount


@dataclass_json
@dataclass
class GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse:
    cloud_identity_accounts: Optional[List[googlecloudchannelv1cloudidentitycustomeraccount.GoogleCloudChannelV1CloudIdentityCustomerAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudIdentityAccounts' }})
    

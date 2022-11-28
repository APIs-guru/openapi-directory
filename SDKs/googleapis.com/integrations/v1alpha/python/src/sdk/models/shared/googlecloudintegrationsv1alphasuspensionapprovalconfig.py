from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput:
    r"""GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput
    Configurations for approving the Suspension.
    """
    
    custom_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customMessage') }})
    email_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddresses') }})
    expiration: Optional[GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration') }})
    

@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig:
    r"""GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig
    Configurations for approving the Suspension.
    """
    
    custom_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customMessage') }})
    email_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddresses') }})
    expiration: Optional[GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration') }})
    

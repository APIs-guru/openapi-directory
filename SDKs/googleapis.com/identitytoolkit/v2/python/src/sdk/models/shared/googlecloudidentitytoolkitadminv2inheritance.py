from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2Inheritance:
    r"""GoogleCloudIdentitytoolkitAdminV2Inheritance
    Settings that the tenants will inherit from project level.
    """
    
    email_sending_config: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailSendingConfig') }})
    

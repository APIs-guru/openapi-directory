from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccountCredentialsPurposeEnum(str, Enum):
    ACCOUNT_CREDENTIALS_PURPOSE_UNSPECIFIED = "ACCOUNT_CREDENTIALS_PURPOSE_UNSPECIFIED"
    SHOPIFY_ORDER_MANAGEMENT = "SHOPIFY_ORDER_MANAGEMENT"
    SHOPIFY_INTEGRATION = "SHOPIFY_INTEGRATION"


@dataclass_json
@dataclass
class AccountCredentials:
    r"""AccountCredentials
    Credentials allowing Google to call a partner's API on behalf of a merchant.
    """
    
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    expires_in: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiresIn') }})
    purpose: Optional[AccountCredentialsPurposeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    

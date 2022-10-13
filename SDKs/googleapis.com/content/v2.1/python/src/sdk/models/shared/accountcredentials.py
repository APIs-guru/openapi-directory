from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AccountCredentialsPurposeEnum(str, Enum):
    ACCOUNT_CREDENTIALS_PURPOSE_UNSPECIFIED = "ACCOUNT_CREDENTIALS_PURPOSE_UNSPECIFIED"
    SHOPIFY_ORDER_MANAGEMENT = "SHOPIFY_ORDER_MANAGEMENT"
    SHOPIFY_INTEGRATION = "SHOPIFY_INTEGRATION"


@dataclass_json
@dataclass
class AccountCredentials:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessToken' }})
    expires_in: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiresIn' }})
    purpose: Optional[AccountCredentialsPurposeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purpose' }})
    

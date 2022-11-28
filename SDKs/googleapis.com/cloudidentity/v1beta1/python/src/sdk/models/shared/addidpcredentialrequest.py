from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AddIdpCredentialRequest:
    r"""AddIdpCredentialRequest
    The request for creating an IdpCredential with its associated payload. An InboundSamlSsoProfile can own up to 2 credentials.
    """
    
    pem_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pemData') }})
    

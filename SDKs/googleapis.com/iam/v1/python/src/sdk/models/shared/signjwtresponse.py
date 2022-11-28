from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SignJwtResponse:
    r"""SignJwtResponse
    Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign JWT response.
    """
    
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyId') }})
    signed_jwt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signedJwt') }})
    

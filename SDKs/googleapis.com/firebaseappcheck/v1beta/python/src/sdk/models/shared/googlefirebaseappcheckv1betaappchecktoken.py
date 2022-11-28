from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaAppCheckToken:
    r"""GoogleFirebaseAppcheckV1betaAppCheckToken
    Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check.
    """
    
    attestation_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attestationToken') }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    

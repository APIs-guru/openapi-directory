from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlefirebaseappcheckv1betaappchecktoken
from . import googlefirebaseappcheckv1betaattestationtokenresponse


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse:
    app_check_token: Optional[googlefirebaseappcheckv1betaappchecktoken.GoogleFirebaseAppcheckV1betaAppCheckToken] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appCheckToken' }})
    artifact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifact' }})
    attestation_token: Optional[googlefirebaseappcheckv1betaattestationtokenresponse.GoogleFirebaseAppcheckV1betaAttestationTokenResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attestationToken' }})
    

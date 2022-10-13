from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlefirebaseappcheckv1appchecktoken


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse:
    app_check_token: Optional[googlefirebaseappcheckv1appchecktoken.GoogleFirebaseAppcheckV1AppCheckToken] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appCheckToken' }})
    artifact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifact' }})
    

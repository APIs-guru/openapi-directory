from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse:
    r"""GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse
    Response message for the ExchangeAppAttestAttestation method.
    """
    
    app_check_token: Optional[GoogleFirebaseAppcheckV1AppCheckToken] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appCheckToken') }})
    artifact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifact') }})
    

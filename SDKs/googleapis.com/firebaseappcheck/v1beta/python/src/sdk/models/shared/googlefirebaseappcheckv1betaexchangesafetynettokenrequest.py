from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest:
    r"""GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest
    Request message for the ExchangeSafetyNetToken method.
    """
    
    safety_net_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('safetyNetToken') }})
    

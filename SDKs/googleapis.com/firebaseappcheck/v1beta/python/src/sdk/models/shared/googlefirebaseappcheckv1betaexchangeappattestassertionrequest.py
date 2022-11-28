from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest:
    r"""GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest
    Request message for the ExchangeAppAttestAssertion method.
    """
    
    artifact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifact') }})
    assertion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assertion') }})
    challenge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challenge') }})
    

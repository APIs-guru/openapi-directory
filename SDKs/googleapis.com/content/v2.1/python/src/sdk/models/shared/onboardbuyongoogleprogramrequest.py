from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OnboardBuyOnGoogleProgramRequest:
    r"""OnboardBuyOnGoogleProgramRequest
    Request message for the OnboardProgram method.
    """
    
    customer_service_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerServiceEmail') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SigningBasket:
    r"""SigningBasket
    JSON Body of a establish signing basket request.
    The body shall contain at least one entry.
    
    """
    
    consent_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentIds') }})
    payment_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentIds') }})
    

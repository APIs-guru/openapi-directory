from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PaymentRequest:
    r"""PaymentRequest
    Payment object request.
    """
    
    usd: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('usd') }})
    cvv: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cvv') }})
    

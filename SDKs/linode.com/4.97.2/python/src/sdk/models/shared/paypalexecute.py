from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PayPalExecute:
    r"""PayPalExecute
    An object representing an execution of Payment to PayPal to capture the funds and credit your Linode Account.
    
    """
    
    payer_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payer_id') }})
    payment_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_id') }})
    

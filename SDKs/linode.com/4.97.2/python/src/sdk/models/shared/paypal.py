from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PayPal:
    r"""PayPal
    An object representing the staging of a Payment via PayPal.
    
    """
    
    cancel_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancel_url') }})
    redirect_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_url') }})
    usd: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('usd') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreditEstimate:
    r"""CreditEstimate
    An estimated credit applied to the costs on a SKU.
    """
    
    credit_amount: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditAmount') }})
    credit_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditDescription') }})
    credit_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditType') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CheckoutCustomFieldEdit:
    checkout_custom_field: Optional[CheckoutCustomFieldEditFields] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkout_custom_field') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccountUser:
    admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin') }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    order_manager: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderManager') }})
    payments_analyst: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentsAnalyst') }})
    payments_manager: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentsManager') }})
    reporting_manager: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportingManager') }})
    

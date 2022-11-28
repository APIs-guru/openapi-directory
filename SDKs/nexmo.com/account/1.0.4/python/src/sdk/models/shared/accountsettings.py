from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccountSettings:
    dr_callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dr-callback-url') }})
    max_calls_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max-calls-per-second') }})
    max_inbound_request: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max-inbound-request') }})
    max_outbound_request: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max-outbound-request') }})
    mo_callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mo-callback-url') }})
    

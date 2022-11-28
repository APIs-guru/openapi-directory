from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NiResponseAsync:
    error_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_text') }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    remaining_balance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remaining_balance') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    request_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_price') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

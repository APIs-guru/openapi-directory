from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OrdersRejectReturnLineItemResponse:
    execution_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionStatus') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    

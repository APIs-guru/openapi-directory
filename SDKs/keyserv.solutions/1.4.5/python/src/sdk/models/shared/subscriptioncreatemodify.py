from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SubscriptionCreateModify:
    action: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    frequency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    callback_on_modify: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callbackOnModify') }})
    callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callbackUrl') }})
    custom: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    start_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startFrom') }})
    

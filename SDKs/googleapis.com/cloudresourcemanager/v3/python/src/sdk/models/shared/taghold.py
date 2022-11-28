from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TagHold:
    r"""TagHold
    A TagHold represents the use of a TagValue that is not captured by TagBindings. If a TagValue has any TagHolds, deletion will be blocked. This resource is intended to be created in the same cloud location as the `holder`.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    help_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('helpLink') }})
    holder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holder') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    

@dataclass_json
@dataclass
class TagHoldInput:
    r"""TagHoldInput
    A TagHold represents the use of a TagValue that is not captured by TagBindings. If a TagValue has any TagHolds, deletion will be blocked. This resource is intended to be created in the same cloud location as the `holder`.
    """
    
    help_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('helpLink') }})
    holder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holder') }})
    origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OperatingSystem:
    r"""OperatingSystem
    Contains information about an operating system that can be targeted by ads.
    """
    
    dart_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dartId') }})
    desktop: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desktop') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    mobile: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobile') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

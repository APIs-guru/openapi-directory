from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateManagedShortLinkRequest:
    r"""CreateManagedShortLinkRequest
    Request to create a managed Short Dynamic Link.
    """
    
    dynamic_link_info: Optional[DynamicLinkInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicLinkInfo') }})
    long_dynamic_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longDynamicLink') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sdk_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdkVersion') }})
    suffix: Optional[Suffix] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suffix') }})
    

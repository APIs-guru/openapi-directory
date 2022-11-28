from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CheckRequest:
    r"""CheckRequest
    Request message for the Check method.
    """
    
    attributes: Optional[AttributeContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    flags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flags') }})
    resources: Optional[List[ResourceInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    service_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceConfigId') }})
    

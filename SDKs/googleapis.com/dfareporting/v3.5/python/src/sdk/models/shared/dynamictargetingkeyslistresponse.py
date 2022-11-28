from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DynamicTargetingKeysListResponse:
    r"""DynamicTargetingKeysListResponse
    Dynamic Targeting Key List Response
    """
    
    dynamic_targeting_keys: Optional[List[DynamicTargetingKey]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicTargetingKeys') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    

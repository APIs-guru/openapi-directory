from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoCombinedCondition:
    r"""EnterpriseCrmEventbusProtoCombinedCondition
    This message recursively combines constituent conditions using logical AND.
    """
    
    conditions: Optional[List[EnterpriseCrmEventbusProtoCondition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    

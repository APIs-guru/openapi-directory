from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Action:
    r"""Action
    Action message contains metadata information about a single action present in the external system.
    """
    
    input_parameters: Optional[List[InputParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputParameters') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    result_metadata: Optional[List[ResultMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultMetadata') }})
    

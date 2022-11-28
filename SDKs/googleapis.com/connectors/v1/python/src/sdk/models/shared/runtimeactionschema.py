from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RuntimeActionSchema:
    r"""RuntimeActionSchema
    Schema of a runtime action.
    """
    
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    input_parameters: Optional[List[InputParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputParameters') }})
    result_metadata: Optional[List[ResultMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultMetadata') }})
    

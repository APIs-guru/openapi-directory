from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CheckInfo:
    r"""CheckInfo
    Contains additional information about the check operation.
    """
    
    consumer_info: Optional[ConsumerInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerInfo') }})
    unused_arguments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unusedArguments') }})
    

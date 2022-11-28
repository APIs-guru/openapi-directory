from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SerialPipeline:
    r"""SerialPipeline
    SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.
    """
    
    stages: Optional[List[Stage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stages') }})
    

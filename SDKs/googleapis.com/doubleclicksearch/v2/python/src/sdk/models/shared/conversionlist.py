from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConversionList:
    r"""ConversionList
    A list of conversions.
    """
    
    conversion: Optional[List[Conversion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversion') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    

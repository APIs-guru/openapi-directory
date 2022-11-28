from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SystemParameters:
    r"""SystemParameters
    ### System parameter configuration A system parameter is a special kind of parameter defined by the API system, not by an individual API. It is typically mapped to an HTTP header and/or a URL query parameter. This configuration specifies which methods change the names of the system parameters.
    """
    
    rules: Optional[List[SystemParameterRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

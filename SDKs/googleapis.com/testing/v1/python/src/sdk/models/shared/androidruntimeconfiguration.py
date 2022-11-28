from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AndroidRuntimeConfiguration:
    r"""AndroidRuntimeConfiguration
    Android configuration that can be selected at the time a test is run.
    """
    
    locales: Optional[List[Locale]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locales') }})
    orientations: Optional[List[Orientation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orientations') }})
    

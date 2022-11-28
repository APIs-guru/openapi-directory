from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RuntimeMetadata:
    r"""RuntimeMetadata
    RuntimeMetadata describing a runtime environment.
    """
    
    parameters: Optional[List[ParameterMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    sdk_info: Optional[SDKInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdkInfo') }})
    

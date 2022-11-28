from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1Parameter:
    r"""GoogleCloudChannelV1Parameter
    Definition for extended entitlement parameters.
    """
    
    editable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editable') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[GoogleCloudChannelV1Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class GoogleCloudChannelV1ParameterInput:
    r"""GoogleCloudChannelV1ParameterInput
    Definition for extended entitlement parameters.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[GoogleCloudChannelV1Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

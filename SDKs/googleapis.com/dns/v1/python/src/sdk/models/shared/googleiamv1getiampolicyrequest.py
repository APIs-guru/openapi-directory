from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleIamV1GetIamPolicyRequest:
    r"""GoogleIamV1GetIamPolicyRequest
    Request message for `GetIamPolicy` method.
    """
    
    options: Optional[GoogleIamV1GetPolicyOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    

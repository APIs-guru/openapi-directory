from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResponsePolicyRulesPatchResponse:
    header: Optional[ResponseHeader] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    response_policy_rule: Optional[ResponsePolicyRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responsePolicyRule') }})
    

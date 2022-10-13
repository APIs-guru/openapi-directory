from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import getpolicyoptions


@dataclass_json
@dataclass
class GetIamPolicyRequest:
    options: Optional[getpolicyoptions.GetPolicyOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    

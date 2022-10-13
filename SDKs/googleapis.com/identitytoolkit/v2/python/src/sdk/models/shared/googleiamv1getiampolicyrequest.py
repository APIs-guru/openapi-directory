from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleiamv1getpolicyoptions


@dataclass_json
@dataclass
class GoogleIamV1GetIamPolicyRequest:
    options: Optional[googleiamv1getpolicyoptions.GoogleIamV1GetPolicyOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import responseheader
from . import responsepolicy


@dataclass_json
@dataclass
class ResponsePoliciesUpdateResponse:
    header: Optional[responseheader.ResponseHeader] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    response_policy: Optional[responsepolicy.ResponsePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responsePolicy' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import responseheader
from . import responsepolicyrule


@dataclass_json
@dataclass
class ResponsePolicyRulesUpdateResponse:
    header: Optional[responseheader.ResponseHeader] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    response_policy_rule: Optional[responsepolicyrule.ResponsePolicyRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responsePolicyRule' }})
    

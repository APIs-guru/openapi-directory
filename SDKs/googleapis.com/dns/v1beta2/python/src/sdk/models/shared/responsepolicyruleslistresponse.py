from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import responseheader
from . import responsepolicyrule


@dataclass_json
@dataclass
class ResponsePolicyRulesListResponse:
    header: Optional[responseheader.ResponseHeader] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    response_policy_rules: Optional[List[responsepolicyrule.ResponsePolicyRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responsePolicyRules' }})
    

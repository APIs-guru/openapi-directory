from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyversionsv1resolvedpolicy


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1ResolveResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    resolved_policies: Optional[List[googlechromepolicyversionsv1resolvedpolicy.GoogleChromePolicyVersionsV1ResolvedPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolvedPolicies' }})
    

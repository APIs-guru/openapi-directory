from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyv1resolvedpolicy


@dataclass_json
@dataclass
class GoogleChromePolicyV1ResolveResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    resolved_policies: Optional[List[googlechromepolicyv1resolvedpolicy.GoogleChromePolicyV1ResolvedPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolvedPolicies' }})
    

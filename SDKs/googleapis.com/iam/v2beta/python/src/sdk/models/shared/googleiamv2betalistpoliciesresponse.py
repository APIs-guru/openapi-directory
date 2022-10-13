from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleiamv2betapolicy


@dataclass_json
@dataclass
class GoogleIamV2betaListPoliciesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    policies: Optional[List[googleiamv2betapolicy.GoogleIamV2betaPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policies' }})
    

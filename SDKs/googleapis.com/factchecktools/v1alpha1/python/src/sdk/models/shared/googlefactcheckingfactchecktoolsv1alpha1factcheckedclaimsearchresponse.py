from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefactcheckingfactchecktoolsv1alpha1claim


@dataclass_json
@dataclass
class GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse:
    claims: Optional[List[googlefactcheckingfactchecktoolsv1alpha1claim.GoogleFactcheckingFactchecktoolsV1alpha1Claim]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'claims' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

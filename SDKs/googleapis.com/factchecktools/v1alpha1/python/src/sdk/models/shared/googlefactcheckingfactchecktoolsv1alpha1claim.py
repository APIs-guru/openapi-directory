from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefactcheckingfactchecktoolsv1alpha1claimreview


@dataclass_json
@dataclass
class GoogleFactcheckingFactchecktoolsV1alpha1Claim:
    claim_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'claimDate' }})
    claim_review: Optional[List[googlefactcheckingfactchecktoolsv1alpha1claimreview.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'claimReview' }})
    claimant: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'claimant' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

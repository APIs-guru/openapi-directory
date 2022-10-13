from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage


@dataclass_json
@dataclass
class GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse:
    claim_review_markup_pages: Optional[List[googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'claimReviewMarkupPages' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

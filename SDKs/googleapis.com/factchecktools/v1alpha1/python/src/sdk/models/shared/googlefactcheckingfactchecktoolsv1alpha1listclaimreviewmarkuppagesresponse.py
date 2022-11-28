from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse:
    r"""GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse
    Response from listing `ClaimReview` markup.
    """
    
    claim_review_markup_pages: Optional[List[GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimReviewMarkupPages') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

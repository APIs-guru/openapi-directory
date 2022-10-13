from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefactcheckingfactchecktoolsv1alpha1claimreviewauthor
from . import googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkup


@dataclass_json
@dataclass
class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage:
    claim_review_author: Optional[googlefactcheckingfactchecktoolsv1alpha1claimreviewauthor.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'claimReviewAuthor' }})
    claim_review_markups: Optional[List[googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkup.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'claimReviewMarkups' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageUrl' }})
    publish_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishDate' }})
    version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionId' }})
    

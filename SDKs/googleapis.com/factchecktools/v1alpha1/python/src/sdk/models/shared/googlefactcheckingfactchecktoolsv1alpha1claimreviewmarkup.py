from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefactcheckingfactchecktoolsv1alpha1claimauthor
from . import googlefactcheckingfactchecktoolsv1alpha1claimrating


@dataclass_json
@dataclass
class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup:
    claim_appearances: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'claimAppearances' }})
    claim_author: Optional[googlefactcheckingfactchecktoolsv1alpha1claimauthor.GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'claimAuthor' }})
    claim_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'claimDate' }})
    claim_first_appearance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'claimFirstAppearance' }})
    claim_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'claimLocation' }})
    claim_reviewed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'claimReviewed' }})
    rating: Optional[googlefactcheckingfactchecktoolsv1alpha1claimrating.GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

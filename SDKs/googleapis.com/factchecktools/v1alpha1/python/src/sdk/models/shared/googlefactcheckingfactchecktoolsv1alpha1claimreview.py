from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlefactcheckingfactchecktoolsv1alpha1publisher


@dataclass_json
@dataclass
class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview:
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    publisher: Optional[googlefactcheckingfactchecktoolsv1alpha1publisher.GoogleFactcheckingFactchecktoolsV1alpha1Publisher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisher' }})
    review_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewDate' }})
    textual_rating: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textualRating' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating:
    best_rating: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bestRating' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUrl' }})
    rating_explanation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ratingExplanation' }})
    rating_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ratingValue' }})
    textual_rating: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textualRating' }})
    worst_rating: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'worstRating' }})
    

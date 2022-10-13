from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaRating:
    average_rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averageRating' }})
    rating_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ratingCount' }})
    rating_histogram: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ratingHistogram' }})
    
